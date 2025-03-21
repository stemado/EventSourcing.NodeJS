import express, { Application, Router } from 'express';
import http from 'http';

export const getApplication = (...routers: Router[]) => {
  const app: Application = express();

  app.set('etag', false);
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(...routers);

  return app;
};

export const startAPI = (app: Application, port = 5000) => {
  const server = http.createServer(app);

  server.listen(port);

  server.on('listening', () => {
    console.info('server up listening');
  });
};
