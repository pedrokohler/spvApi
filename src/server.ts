import express from 'express';
import router from './router';

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000);

export default app;
