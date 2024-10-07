import axios from "axios"
import { API_URL } from "./baseService"

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.accessToken)
        localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
}

export const register = async (name, surname, age, userName, email, password, confirmPassword, gender) => {
    const response = await axios.post(`${API_URL}/auth/register`, { name, surname, age, userName, email, password, confirmPassword, gender });
    return response.data;
}