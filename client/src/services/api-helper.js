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
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return false
}

export const destroyUser = async (id) => {
  try {
    const resp = await api.delete(`/users/${id}`)
    return resp.data
  } catch (e) {
    return e.message;
  }
}

// userController.delete('/login/:id', restrict, async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   await user.destroy();
// });
