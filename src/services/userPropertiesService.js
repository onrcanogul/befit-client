import { API_URL, request } from "./baseService"
import { toast } from "material-react-toastify";

export const getUserProperties = async (userId) => {
    const response = await request(`${API_URL}/userProperties?userId=${userId}`, null, true);
    if (response.data.isSuccessful) {
        return response.data;
    }
    toast.error(response.data.error[0])
}
