import { defineStore } from 'pinia';
import { login } from '/src/api/user';

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
    }
    setToken(token: string) {
      this.token = token;
    },
    async login(username: string, password: string):
      Promise<{ username: string, nickname: string, token: string }> {
      const { data } = await login(username, password);
      this.setUserName(data.username);
      this.setNickName(data.nickname);
      this.setToken(data.token);
      return data;
    }
  }
});
