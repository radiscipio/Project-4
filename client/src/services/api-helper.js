const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getProducts = async (products) => {
  const resp = await api.get('/products', products);
  return resp.data;
};

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    const resp = await api.get('/auth/verify');
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  }
  return false
}

// export const deleteUser = async () => {
//   try {
//     const user = await api.delete(`/user/${userId}`, null, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
//     return user.data;
//   } catch (e) {
//     console.log(e.message);
//   };
// }