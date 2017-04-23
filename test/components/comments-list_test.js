/* eslint-disable */
import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comments-box';

describe('CommentList', () => {
  let component;

  beforeEach(()=>{
    const state = {comments: ['New comment', 'Other new comment']};
    component = renderComponent(CommentBox, null, state);
  });

  it('shows an Li for each comment', () => {
    expect(component.find('li').length).to.be.equal(2);
  });

  it('shos each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('Other new comment');
  });
});
