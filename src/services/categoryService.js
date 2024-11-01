import axios from "axios"
import { API_URL, deleteRequest, putRequest } from "./baseService"
import { toast } from "material-react-toastify";


export const getCategories = async () => {
    const response = await axios.get(`${API_URL}/category`);
    if (response.data.isSuccessful) {
        return response.data;
    }
    toast.error(response.data.error[0])
}
export const getCategoriesById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    if (response.data.isSuccessful) {
        return response.data;
    }
    toast.error(response.data.error[0])
}
export const createCategory = async ({ name, desription }) => {
    const response = await axios.post(`${API_URL}`, { name, desription }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    });
    if (response.data.isSuccessful) {
        toast.success("Category successfully created")
        return response.data;
    }
    toast.error(response.data.error[0])
}

export const updateCategory = async ({ id, name, description }) => {
    const response = await putRequest(API_URL, { id, name, description }, true);
    if (response.data.isSuccessful) {
        toast.success("Category successfully updated")
        return response.data;
    }
    toast.error(response.data.error[0])
}
export const deleteCategory = async (id) => {
    const response = await deleteRequest(API_URL, id, true);
    if (response.data.isSuccessful) {
        toast.success("Category successfully removed")
        return response.data;
    }
    toast.error(response.data.error[0])
}