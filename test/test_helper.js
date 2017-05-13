import jquery from 'jquery';
import jsdom from 'jsdom';
import TestUtis from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import reducers from '../src/reducers';

const { JSDOM } = jsdom;

global.window = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = global.window.document;

const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtis.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider >,
  );

  // eslint-disable-next-line
  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtis.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export { expect, renderComponent };
