import { authenticate } from '../../src/actions';
import { expect } from '../test_helper';
import { CHANGE_AUTH } from '../../src/actions/types';

describe('Auth action creator', () => {
  it('has correct type', () => {
    const action = authenticate();

    expect(action)
      .to.have.property('type')
      .and.to.be.equal(CHANGE_AUTH);
  });

  it('has correct payload', () => {
    const action = authenticate(true);

    // eslint-disable-next-line
    expect(action)
      .to.have.property('payload')
      .and.to.be.true;
  });
});
