import axios from "axios";

const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString(){
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
};


export const API = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 5000,
    headers: APIHeaders
});


const APIHeaders2 = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString(){
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
};

export const API2 = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 5000,
    headers: APIHeaders2
});




/* 'https://proyecto-final-bootcamp-backend-lsyvmrfzk-florenpedrajas.vercel.app/', */