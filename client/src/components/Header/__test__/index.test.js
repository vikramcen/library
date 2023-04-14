import React from "react";
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';

afterEach(cleanup);

describe('Header component', () => {
  // First Test
  it('renders', () => {
    render(<Header/>);
  });
  // Second Test
  it('matches snapshot DOM node structure', () => {
    //render About
    const {asFragment} = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  })
})