import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter as Route } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('testing the app component', () => {
  it('renders without crashing', () => {
    const appComponent = shallow(<App />);
    console.log('first ', appComponent.children())
    expect(appComponent.children().contains(<Route />)).toBe(false);
  });
})
