/* eslint-disable */
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows the header', () => {
    expect(component.find('.navbar')).to.exist;
  });
});
