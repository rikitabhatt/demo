import axios from 'axios';
import * as Config from '../common/Config';
import StorageManager from '../common/StorageManager';
const httpClient = axios.create({
    baseURL: Config.API_HOST,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': StorageManager.getAccessToken() ? `Bearer ${StorageManager.getAccessToken()}` : '' 
    },
});

httpClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        StorageManager.removeUser();
        // store.dispatch(SET_AUTH_USER(null));
    }
    return Promise.reject(error);
});

// export const initHeaders = async () => {
//     const userRes = await StorageManager.getUser();
//     if(!userRes) return;
//     let userToken = await  StorageManager.getAccessToken();
//     httpClient.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
// };

//initHeaders();

export default httpClient;