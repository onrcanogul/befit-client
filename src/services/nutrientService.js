import axios from "axios";
import { API_URL } from "./baseService"

export const getNutrients = async (page, size) => {
    const response = await axios.get(`${API_URL}/nutrient?Page=${page}&Size=${size}`);
    return response.data;
}