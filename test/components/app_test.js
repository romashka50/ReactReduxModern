/* eslint-disable */
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows the comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows the comment lis', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
