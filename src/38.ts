import { Router } from '@arcoframework/django';

const router = new Router('/api');

router.get('/', (request) => {
  console.log(request.query['name']);
});

export default router;
