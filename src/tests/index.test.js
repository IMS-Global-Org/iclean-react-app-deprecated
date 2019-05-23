import React from 'react';
import { IndexWrapper } from './Helpers'
import App from '../components/App';

describe('The Main index.js function for rendering the app',() => {
  it('renders without crashing', () => {
    // how to test component rendering
    <IndexWrapper>
      <App />
    </IndexWrapper>
  })
})
