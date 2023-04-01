import guestSignupModel from '../models/guestModel.js';
import HostSignupModel from '../models/hostModel.js';
import {StatusCodes} from 'http-status-codes';

export async function HostSignup(req,res){
    try {
        console.log(req.body);
        const hostdata = new HostSignupModel(req.body);
        const savedHost = await hostdata.save();
        res.status(StatusCodes.CREATED).json(savedHost);  
    } catch (error) {
        console.log(error);
    }
}

export async function getHomestays(req,res){
    try {
       const homestays = await HostSignupModel.find();
       res.status(StatusCodes.OK).json(homestays);
    } catch (error) {
        
    }
}

export async function GuestSignup(req ,res){
    try {console.log(req.body);
        const guestdata = new guestSignupModel(req.body);
        const saveGuest = await guestdata.save();
        console.log(saveGuest);
        res.status(StatusCodes.OK).json(saveGuest);
    } catch (error) {
        console.log(error);
    }
}