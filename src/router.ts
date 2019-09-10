import { Router } from 'express';
import Numbers from './services/numbers';

const numbers = new Numbers();
const router = Router();

router.post('/sum', (req, res) => {
  const result = numbers.sum(req.body.numbers);
  res.status(200).send({ sum: result });
});

router.post('/average', (req, res) => {
  const result = numbers.average(req.body.numbers);
  res.status(200).send({ average: result });
});

export default router;
