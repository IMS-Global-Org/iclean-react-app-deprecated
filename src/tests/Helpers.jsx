import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

// Enzyme setup
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Configure the adapter
configure({ adapter: new Adapter() })

/**
  Helper for wrapping components that require both access to the main
  applicatin router and/or the BrowserRouter
  */
export const IndexWrapper = ({ children, initialEntry = '/' }) => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[ initialEntry ]}>
        { children }
      </MemoryRouter>
    </Provider>,
    div
  );
  return ReactDOM.unmountComponentAtNode(div);
}

export const Wrapper = ({ children, initialEntry = '/' }) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={[ initialEntry ]}>
      { children }
    </MemoryRouter>
  </Provider>
)
