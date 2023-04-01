import express from 'express';
import { GuestSignup, HostSignup, getHomestays } from '../controllers/controllers.js';

const Router = express.Router();

Router.post('/hostsignup',HostSignup);
Router.post('/guestsignup', GuestSignup);
Router.get('/homestays',getHomestays);

export default Router;