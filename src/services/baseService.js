import axios from "axios";

export const API_URL = "http://localhost:5001/api";


export const request = async (endpoint = API_URL, data, auth) => {
    return await axios.get(endpoint + (data ? "/auth" : ""), auth ? {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    } : "");
}
export const postRequest = async (endpoint = API_URL, data, auth) => {
    if (auth) return await axios.post(endpoint, data ? data : "", auth ? {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    } : "");
    else
        return await axios.post(endpoint, data);
}
export const putRequest = async (endpoint = API_URL, data, auth) => {
    if (auth) return await axios.put(endpoint, data ? data : "", auth ? {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    } : "");
    else
        return await axios.post(endpoint, data);
}
export const deleteRequest = async (endpoint = API_URL, data, auth) => {
    if (auth) return await axios.delete(endpoint + (data ? data : ""), auth ? {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    } : "");
    else
        return await axios.post(endpoint, data);
}
