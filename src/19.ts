// Importing necessary packages
import { app } from 'express';
import * as routes from './routes';

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
