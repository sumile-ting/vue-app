import axios from 'axios'
export const permissions = () => {
  return axios.get('permissions.json');
};
