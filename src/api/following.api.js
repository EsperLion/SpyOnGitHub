import axios from 'axios';

export function loadUserFollowing(name, page, per_page) {
  return axios.request({
    url: `https://api.github.com/users/${name}/following`,
    params: {
      page,
      per_page,
    },
  });
}