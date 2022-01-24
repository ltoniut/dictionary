
import express from 'express';
import path from 'path';
import * as bluebird from 'bluebird';
import mongoose from 'mongoose';
const ws = require("ws");
const routes = require("./routes/routes");

const app = express();
const port = 8080; // default port to listen

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get('/', res => {
  // render the index template
  res.render('index');
});

// start the express server
const server = app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

// database connection
if (!mongoose.connection.readyState) {
  const mongoDB =
    'mongodb+srv://ltoniut:myPass@mediamonkstestdb.sjkf3.mongodb.net/test';
    mongoose.connect(mongoDB, { promiseLibrary: bluebird });
  app.set('debug', !process.env.NODE_ENV || process.env.NODE_ENV === 'development');
}

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
    socket.on('message', message => console.log(message));
});

server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, head, socket => {
        wsServer.emit('connection', socket, request);
    });
});

// Application routes
routes.setup(app);
