import axios from 'axios';

export function loadUserInfo (login) {
  return axios.request({
    url: `https://api.github.com/users/${login}`,
  });
}