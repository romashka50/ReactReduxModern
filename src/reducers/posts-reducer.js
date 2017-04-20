import { FETCH_POST } from '../actions/index';

const INITIAL_STATA = { all: [], post: null };

export default function (state = INITIAL_STATA, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
