
import * as axios from 'axios';

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
// const property = {withCredentials: true};

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {"API-KEY": "bc973d19-d75d-4ead-a819-8d63c27b31bc"}
});

export const usersAPI = {
  getUsers(currentPage, userCount) {
    return instance.get(`users?page=${currentPage}&count=${userCount}`)
      .then(res => res.data)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(res => res.data);
  }
}

export const authAPI = {
  getAuthUser() {
    return instance.get('auth/me').then(res => res.data);
  }
}

export const followAPI = {
  follow(userId) {

  }
}
