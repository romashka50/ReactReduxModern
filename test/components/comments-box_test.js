/* eslint-disable */
import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comments-box';

describe('CommentBox', () => {
  let component;

  beforeEach(()=>{
    component = renderComponent(CommentBox);
  });

  it('Has text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('Has correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('Has has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submited, clear the input', () => {
      component.simulate('submit');
      
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
