import axios from "axios"
import { API_URL, deleteRequest, putRequest } from "./baseService"


export const getCategories = async () => {
    const response = await axios.get(`${API_URL}/category`);
    return response.data;
}
export const getCategoriesById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}
export const createCategory = async ({ name, desription }) => {
    const response = await axios.post(`${API_URL}`, { name, desription }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    });
    return response.data;
}

export const updateCategory = async ({ id, name, description }) => {
    const response = await putRequest(API_URL, { id, name, description }, true);
    return response.data;
}
export const deleteCategory = async (id) => {
    const response = await deleteRequest(API_URL, id, true);
    return response.data;
}