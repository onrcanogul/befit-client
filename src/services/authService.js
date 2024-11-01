import axios from "axios"
import { API_URL } from "./baseService"
import { toast } from "material-react-toastify";

export const login = async (emailOrUsername, password, rememberMe) => {
    debugger;
    var model = { emailOrUsername, password, rememberMe }
    axios.post(`${API_URL}/auth/login`, {
        model
    })
        .then(response => {
            console.log(response);
            localStorage.setItem("accessToken", response.data.data.accessToken);
            localStorage.setItem("refreshToken", response.data.data.refreshToken);
            toast.success("User logged in successfully")
        })
        .catch(error => {
            console.log(error)
            toast.error(error.response.data.errors[0])
        });
}

export const register = async (name, surname, age, userName, email, password, confirmPassword, gender) => {
    const model = { name, surname, age, userName, email, password, confirmPassword, gender };
    axios.post(`${API_URL}/auth/register`, { model })
        .then(response => {
            toast.success("User registered successfully.")
            setTimeout(() => {
                toast.dismiss();
                window.location.reload();
            }, 1000);
        })
        .catch(error => {
            console.log(error);
            toast.error(error.response.data.errors[0]);
        });
}

export const isAuthenticated = () => {
    return localStorage.getItem("accessToken") ? true : false;
}

export const isTokenExpired = () => {
    debugger;
    isAuthenticated();
    const token = localStorage.getItem('accessToken');
    if (!token) return true;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
}

export const currentUsername = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.UserName
}

export const currentUserId = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.Id
}



export const refreshTokenLogin = () => {
    axios.post(`${API_URL}/auth/refresh-token-login`, localStorage.getItem('refreshToken'))
        .then(response => {
            localStorage.setItem("accessToken", response.data.data.accessToken);
        })
        .catch(error => {
            console.log(error);
            logout();
        })
}
export const logout = () => {
    localStorage.removeItem('accessToken');
}