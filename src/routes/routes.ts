import { Express, Router } from 'express';
import { GetHash } from '../handlers/hashHandler';

function setup(app: Express) {

// ########## Routes ##########

  // Dictionary Routers
  const dictionaryRouter = Router();

  dictionaryRouter.get('/', GetHash);

  app.use('/api/dictionary', dictionaryRouter);
};

exports.setup = setup;
