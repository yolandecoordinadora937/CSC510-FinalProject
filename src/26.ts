import { Router } from 'express';
import { AuthController } from '../controllers/auth';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const authController = new AuthController();
    if (await authController.checkUsernameAndPassword(username, password)) {
      return res.status(200).json({ success: true });
    }
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (error) {
    console.error('Error in login route:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.user = null;
    res.clearCookie('token');
    return res.json({ success: true });
  } catch (error) {
    console.error('Error in logout route:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

export default router;
