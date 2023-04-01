import express from 'express';
import { GuestSignup, HostSignup } from '../controllers/controllers.js';

const Router = express.Router();

Router.post('/hostsignup',HostSignup);
Router.post('/guestsignup', GuestSignup);

export default Router;