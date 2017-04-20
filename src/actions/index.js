import axios from 'axios';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=buchuk';
export const FETCH_POST = 'FETCH_POST';

export function fetchPosts() {
  const response = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: response,
  };
}
