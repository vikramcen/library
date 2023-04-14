import React from "react";
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterBar from '..';

afterEach(cleanup);

describe('FilterBar component', () => {
  // First Test
  it('renders', () => {
    render(<FilterBar/>);
  });
  // Second Test
  it('matches snapshot DOM node structure', () => {
    //render About
    const {asFragment} = render(<FilterBar />);
    expect(asFragment()).toMatchSnapshot();
  })
})