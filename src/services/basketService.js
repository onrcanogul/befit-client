import { API_URL, postRequest, request } from "./baseService"

export const getBasket = async (userId) => {
    const response = await request(`${API_URL}/basket/${userId}`, null, false)
    return response.data;
}

export const clearBasket = async (userId) => {
    const response = await postRequest(API_URL, userId, true);
    return response.data
}