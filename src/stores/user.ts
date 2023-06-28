import { defineStore } from 'pinia';
import { loginAPI, registerAPI } from '/src/api/user';
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
    async login(params: { username: string, password: string }): 
      Promise<GetUserInfoModel | null> {
      try {
        const { data } = await loginAPI({
          username: params.username, 
          password: params.password
        });
        this.setUserName(data.username);
        this.setNickName(data.nickname);
        this.setToken(data.token);
        return data;
      } catch (error) {
        return error;
      }
    },
    async logout() {
      this.setUserName('');
      this.setNickName('');
      this.setToken('');
    },
    async register(username: string, 
                   password: string, nickname: string):
      Promise<GetUserInfoModel | null> {
      try {
        const { data } = await registerAPI({
          username: username,
          password: password,
          nickname: nickname
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
