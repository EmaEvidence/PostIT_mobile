import axios from 'axios';

export const signIn = (data) => {
  return axios.post('https://postaa.herokuapp.com/api/v1/user/signin', data)
    .then((response) => {
      const { token } = response.data;
      return {
        message: 'Welcome',
        token
      };
    })
    .catch((error) => {
      return (error.response.data.message);
    });
};

export const signUp = (data) => {
  return axios.post('https://postaa.herokuapp.com/api/v1/user/signup', data)
    .then((response) => {
      const { token } = response.data;
      return {
        message: 'Welcome',
        token
      };
    })
    .catch((error) => {
      return (error.response.data.message);
    });
};

