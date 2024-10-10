import axios from "axios";
import { API_URL, deleteRequest, putRequest } from "./baseService"

export const getFoods = async (page, size) => {
    const response = await axios.get(`${API_URL}/food?Page=${page}&Size=${size}`);
    return response.data;
}