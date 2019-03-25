import axios from 'axios';

export function loadUsersList (since, perPage) {
  return axios.request({
    url: `https://api.github.com/users`,
    params: {
      since,
      per_page: perPage,
    },
  });
}