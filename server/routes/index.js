import express from 'express';
const appRouter = express.Router();

import createUser from './apis/createUser.js';
import getData from './apis/getData.js';

appRouter.post('/create_user', createUser);
appRouter.get('/get_user_data', getData);

export default appRouter; 
