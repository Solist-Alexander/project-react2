import {baseURL} from "../constans/urls";
import axios from "axios";


const apiService =  axios.create({baseURL,   headers: {
        accept: 'application/json',
        Authorization:  `Bearer ${process.env.REACT_APP_API_KEY}`
    }})
export {
    apiService
}