import axios from 'axios';

export const tasksReq = axios.create({
    baseURL: `https://damp-glitter-4950.getsandbox.com/`,
  })
