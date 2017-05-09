import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import commentsReducer from '../../src/reducers/comments';

describe('Comments reducer', () => {
  it('handle actions with unknown types', () => {
    expect(commentsReducer(undefined, {})).to.be.eql([]);
  });

  it('handle actions with COMMENT:SAVE types', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment',
    };

    expect(commentsReducer([], action)).to.be.eql(['new comment']);
  });
});
