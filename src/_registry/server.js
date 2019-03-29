import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import config from '../config';
import authRouter from '../routes/authRouter';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(
  cors({
    origin: config.clientUrl
  })
);

app.use('/hello', (req, res, next) => {
  res.json(req.body.name);
});

app.use(authRouter);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;
