import axios from "axios";
import { toast } from "material-react-toastify";
import { API_URL } from "./baseService"

export const getNutrients = async (page, size) => {
    const response = await axios.get(`${API_URL}/nutrient?Page=${page}&Size=${size}`);
    if (response.data.isSuccessful) {
        return response.data;
    }
    toast.error(response.data.error[0])
}