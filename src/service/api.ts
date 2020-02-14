import axios from 'axios';

export const tasksReq = axios.create({
    baseURL: `https://vue-spring.getsandbox.com`,
  });
