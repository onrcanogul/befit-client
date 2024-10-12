import { API_URL, deleteRequest, postRequest, putRequest } from "./baseService"

export const addBasketItem = async (nutrientId, basketId, grammage) => {
    const response = await postRequest(`${API_URL}/basketItem`, { nutrientId, basketId, grammage }, true);
    return response.data;
}

export const updateBasketItem = async (id, nutrientId, measure) => {
    const response = await putRequest(`${API_URL}/basketItem`, { id, nutrientId, measure }, true);
    return response.data;
}

export const removeBasketItem = async (id) => {
    const response = await deleteRequest(`${API_URL}/basketItem`, { id }, true);
    return response.data;
}