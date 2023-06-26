import { defineStore } from 'pinia';
import { loginAPI } from '/src/api/user';
import { GetUserInfoModel } from '/src/api/user/model/userModel';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: 'hello',
    nickname: 'hello',
    token: '',
  }),

  getters: {
    getUserName() {
      return this.username;
    },

    getNickName() {
      return this.nickname;
    },

    getToken() {
      return this.token;
    }
  },

  actions: {
    setUserName(username: string) {
      this.username = username;
    },
    setNickName(nickname: string) {
      this.nickname = nickname;
    },
    setToken(token: string) {
      this.token = token;
    },
    async login(username: string, password: string):
      Promise<GetUserInfoModel | null> {
      try {
        const { data } = await loginAPI({
          username: username, 
          password: password
        });
        this.setUserName(data.username);
        this.setNickName(data.nickname);
        this.setToken(data.token);
        return data;
      } catch (error) {
        return error;
      }
    }
  }
});