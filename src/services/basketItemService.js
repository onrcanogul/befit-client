import { toast } from "material-react-toastify";
import { API_URL, deleteRequest, postRequest, putRequest } from "./baseService"

export const addBasketItem = async (nutrientId, userId, grammage) => {
    const model = { nutrientId, userId, grammage }
    const response = await postRequest(`${API_URL}/basketItem`, { model }, false);
    if (response.data.isSuccessful) {
        toast.success("Nutrient successfully added")
        return response.data;
    }
    toast.error(response.data.error[0])
}

export const updateBasketItem = async (id, nutrientId, measure) => {
    const response = await putRequest(`${API_URL}/basketItem`, { id, nutrientId, measure }, true);
    if (response.data.isSuccessful) {
        toast.success("Basket successfully updated")
        return response.data;
    }
    toast.error(response.data.error[0])

}

export const removeBasketItem = async (id) => {
    const response = await deleteRequest(`${API_URL}/basketItem`, { id }, true);
    if (response.data.isSuccessful) {
        toast.success("Nutrient successfully removed from basket")
        return response.data;
    }
    toast.error(response.data.error[0])
}