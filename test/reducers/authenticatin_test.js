import authenticateReducer from '../../src/reducers/authentication';
import { CHANGE_AUTH } from '../../src/actions/types';
import { expect } from '../test_helper';

describe('Authentication Reducer', () => {
  it('has return default state', () => {
    const auth = authenticateReducer(undefined, {});

    expect(auth).to.be.false;
  });

  it('has handel AUTH:CHANGE payload', () => {
    const action = {
      type: CHANGE_AUTH,
      payload: true,
    };
    const auth = authenticateReducer(false, action);

    expect(auth).to.be.true;
  });
});
