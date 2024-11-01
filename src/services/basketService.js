import { API_URL, postRequest, request } from "./baseService"
import { toast } from "material-react-toastify";

export const getBasket = async (userId) => {
    const response = await request(`${API_URL}/basket/${userId}`, null, false)
    if (response.data.isSuccessful) {
        return response.data;
    }
    toast.error(response.data.error[0])
}

export const clearBasket = async (userId) => {
    const response = await postRequest(API_URL, userId, true);
    if (response.data.isSuccessful) {
        toast.success("Basket successfully cleared")
        return response.data;
    }
    toast.error(response.data.error[0])
}