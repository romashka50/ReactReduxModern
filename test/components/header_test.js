/* eslint-disable */
import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/header';

describe('CommentList', () => {
  let component;

  beforeEach(()=>{
    component = renderComponent(CommentBox);
  });

  it('shows an Li for each menu', () => {
    expect(component.find('li').length).to.be.equal(3);
  });

  it('shows each li with class nav-item', () => {
    expect(component.find('li')).to.have.class('nav-item');
  });
});
