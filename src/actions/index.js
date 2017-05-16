import { FETCH_USERS } from './types';

export const fetchUsers = isLoggedIn => ({
  type: FETCH_USERS,
  payload: [
    { name: 'Ivan' },
    { name: 'Petya' },
    { name: 'Vasya' },
  ],
});

export default fetchUsers;
