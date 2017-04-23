import axios from 'axios';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=buchuk';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
  const response = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: response,
  };
}

export function fetchPost(id) {
  const response = axios.get(`${BASE_URL}/posts/${id + API_KEY}`);

  return {
    type: FETCH_POST,
    payload: response,
  };
}

export function createPost(data) {
  const response = axios.post(`${BASE_URL}/posts${API_KEY}`, data);

  return {
    type: CREATE_POST,
    payload: response,
  };
}

export function deletePost(id) {
  const response = axios.delete(`${BASE_URL}/posts/${id + API_KEY}`);

  return {
    type: 'DELETE_POST',
    payload: response,
  };
}
