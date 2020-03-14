const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

server.express.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

server.start(
  {
    cors: {
      credentails: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on http:/localhost:${deets.port}`);
  }
);
