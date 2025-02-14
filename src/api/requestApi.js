import { clearUserData, getUserData } from "./util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    
    

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    const response = await fetch(host + url, options);

    if (!response.ok) {
        const err = await response.json();

        if (response.status == 403 && err.message == 'Invalid access token') {
            clearUserData();
        }

        throw new Error(err.message);
    }

    if (response.status == 204) {
        return response;
    } else {
        return response.json();
    }
}

export const get = async (url) => request('get', url); 
export const post = async (url, data) => request('post', url, data); 
export const put = async (url, data) => request('put', url, data); 
export const del = async (url) => request('delete', url); 