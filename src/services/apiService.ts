import axios from "axios";

import {baseURL} from "../constans";


const apiService =  axios.create({baseURL,  headers: {
        accept: 'application/json',
        Authorization:  `Bearer ${process.env.REACT_APP_API_KEY}`
    }})
export {
    apiService
}