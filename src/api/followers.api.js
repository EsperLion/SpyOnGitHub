import axios from 'axios';

export function loadUserFollowers (name, page, per_page) {
  return axios.request({
    url: `https://api.github.com/users/${name}/followers`,
    params: {
      page,
      per_page,
    },
  });
}