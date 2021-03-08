
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
  },
  getUserStatus(userId) {
    return instance.get('/profile/status/' + userId).then(res => res.data);
  },
  updateUserStatus(status) {
    return instance.put('/profile/status', {status: status}).then(res => res.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data);
  },
  saveProfile(profile) {
    return instance.put('profile', profile).then(res => res.data);
  }
}

export const authAPI = {
  getAuthUser() {
    return instance.get('auth/me').then(res => res.data);
  },
  userLogin(email, password, rememberMe = false, captcha = true) {
    return (
        instance.post('auth/login', {
        email: email,
        password: password,
        rememberMe: rememberMe,
        captcha: captcha
      }).then(res => res.data)
    )
  },
  userLogout() {
    return instance.delete('auth/login').then(res => res.data);
  }
}

export const followAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`).then(res => res.data)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(res => res.data)
  }
}

export const securityAPI = {
  getCaptcha() {
    return instance.get('security/get-captcha-url').then(res => res.data)
  }
}

//window.securityAPI = securityAPI.getCaptcha;
