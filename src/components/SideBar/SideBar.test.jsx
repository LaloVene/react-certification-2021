import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlobalContext from "../../utils/state/GlobalContext";

import SideBar from './SideBar.component';

describe('<SideBar />', () => {

  const toggleDarkTheme = jest.fn()
  
  beforeEach(() => {
    render(
    <GlobalContext.Provider value={{state: {sideBar: true, currentTheme: {id: 'dark'}}, dispatch: toggleDarkTheme}}>
      <SideBar />
    </GlobalContext.Provider>);
  });

  test('Options are rendered', async () => {
    const options = screen.getByTestId('options');
    expect(options).toBeDefined();
  });

  test('Option elements are rendered', async () => {
    const element = screen.getAllByText('Dark Theme');
    expect(element).toBeDefined();
  });

  test('Toggle Dark Theme', async () => {
    const button = screen.getByText('Dark Theme');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(toggleDarkTheme).toHaveBeenCalled();
  });
});
