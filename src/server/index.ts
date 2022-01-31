import express, { Request, Response, Router, Express } from 'express';
import router from './route';
import DBConnect from './dbConfigs';
import { RequestHandler } from 'express-serve-static-core';
import { Server } from 'ws';
import { FunctionRequest } from './route/request';
import { postHash } from './functions/postHash';
import dotenv from 'dotenv';

dotenv.config();

// call express
const app: Express = express(); // define our app using express

// configure app to use bodyParser for
// Getting data from body of requests
app.use(express.urlencoded({ extended: true }) as RequestHandler);

app.use(express.json() as RequestHandler);

const port: number = Number(process.env.PORT) || 8050; // set our port

// connect to database. right now it's just working with mongodb
// but in near future it will be configured for other databases as well
DBConnect.dbConnection();

// Send index.html on root request
app.use(express.static('dist'));
app.get('/', (req: Request, res: Response) => {
  console.log('sending index.html');
  res.sendFile('/dist/index.html');
});

// REGISTER ROUTES
// all of the routes will be prefixed with /api
const routes: Router[] = Object.values(router);
app.use('/api', routes);

// START THE SERVER
// =============================================================================
const server = app.listen(port);
console.log(`App listening on ${port}`);

const wsServer = new Server({ noServer: true });
wsServer.on('connection', (socket) => {
  socket.on('message', async (message) => {
    console.log('Message');
    const data: FunctionRequest = JSON.parse(message.toString());
    if (data.name === 'addHash') {
      await postHash({ key: data.params.key, value: data.params.value });
    }
    console.log(data);
  });
});

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (ws) => {
    wsServer.emit('connection', ws, request);
  });
});
