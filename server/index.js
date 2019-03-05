const fs = require('fs');
const https = require('https');
const path = require('path');

const express = require('express');
const next = require('next');

const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const routesHandler = routes.getRequestHandler(nextApp);

const certOptions = {
  key: fs.readFileSync(path.resolve(__dirname, 'cert/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert/server.crt')),
};

nextApp.prepare()
  .then(() => {
    const app = express();

    app.use(routesHandler);

    const server = https.createServer(certOptions, app);
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
