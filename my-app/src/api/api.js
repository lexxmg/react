
import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const property = {withCredentials: true};

export const getAuthUserDataApi = () => {
  return axios.get(baseUrl + 'auth/me', property).then(res => res.data);
}

export const getProfileApi = (userId) => {
  return axios.get(`${baseUrl}profile/${userId}`, property).then(res => res.data)
}

export const getUsersApi = (currentPage, userCount) => {
  return axios.get(`${baseUrl}users?page=${currentPage}&count=${userCount}`, property)
    .then(res => res.data)
}
