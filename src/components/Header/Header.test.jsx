import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "../../utils/state/GlobalContext";

import Header from './Header.component';

const toggleSideBar = jest.fn()
const changeUrl = jest.fn();

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

beforeEach(() => {
  render(
  <GlobalContext.Provider value={{state: {sideBar: true}, dispatch: toggleSideBar}}>
    <BrowserRouter>
      <Header changeUrl={changeUrl}/>
    </BrowserRouter>
  </GlobalContext.Provider>);
});

describe('<Header />', () => {

  test('Logo redirects', async () => {
    const image = screen.getByTestId('logo');
    fireEvent(
      image,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(image).toBeDefined();
    expect(mockHistoryPush).toHaveBeenCalled();
  });

  test('Toggle SideBar', async () => {
    const toggle = screen.getAllByRole('toggle')[0];
    fireEvent(
      toggle,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(toggle).toBeDefined();
    expect(toggleSideBar).toHaveBeenCalled();
  });

  test('Search no text', async () => {

    // Toggle Search
    const toggle = screen.getAllByRole('toggle')[1];
    fireEvent(
      toggle,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    // Get Input & write
    const input = screen.getByPlaceholderText('Search');

    // Search
    const searchButton = screen.getAllByRole('toggle')[1];
    fireEvent(
      searchButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(input).toBeDefined();
    expect(changeUrl).not.toHaveBeenCalled();
  });

  test('Toggle and search works', async () => {

    // Toggle Search
    const toggle = screen.getAllByRole('toggle')[1];
    fireEvent(
      toggle,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    // Get Input & write
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, {target: {value: 'a'}})

    // Search
    const searchButton = screen.getAllByRole('toggle')[1];
    fireEvent(
      searchButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(input).toBeDefined();
    expect(changeUrl).toHaveBeenCalled();
  });
});
