/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';
import http from 'http';
import https from 'https';
import fs from 'fs';
import cors from 'cors';

import storage from './storage';
import ApiV1 from './apiV1/index';

const ENV = process.env.NODE_ENV || 'dev';
const isDevEnv = ENV === 'dev';
const baseDir = path.dirname(__dirname);

const app = express();

app.set('trust proxy', 1); // trust first proxy
// protect api from various hacking techniques
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());

if (process.env.NODE_ENV !== 'production') {
  // This DISABLES browser cache, just use it in development
  app.use(helmet.noCache());
}

if (isDevEnv) {
  app.use(express.static(path.join(baseDir, '/client/build')));
}
app.use(bodyParser.json({ strict: true }));

app.set('storage', storage());

// api middlewares
// enable cors only for this path
app.use('/v1', cors(), ApiV1);

const PORT = process.env.PORT || 8888;

const server = http.createServer(app);
server.listen(PORT);
const secureServer = https.createServer(
  {
    key: fs.readFileSync('./server/keys/server.key'),
    cert: fs.readFileSync('./server/keys/server.crt'),
    ca: fs.readFileSync('./server/keys/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false,
  },
  app,
);
secureServer.listen('8443', () => {
  console.log('Secure Express server listening on port 8443');
});
if (isDevEnv) {
  console.log(`Server is listening on port ${PORT}`); // eslint-disable-line no-console
}

export default app;
