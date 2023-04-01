import axios from 'axios';
// import { BASE_URL } from '../constants/serviceConstants.js';

export async function saveHost(hostData){
    return await axios.post("http://localhost:4500/hostsignup",hostData);
}
export async function saveGuest(guestdata){
    return await axios.post("http://localhost:4500/guestsignup",guestdata);
}