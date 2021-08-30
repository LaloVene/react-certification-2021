import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from '../../utils/state/GlobalContext';
import MockData from '../../utils/related-videos.json';
import HomeView from './HomeView.page';

const changeUrl = jest.fn();
describe('<HomeView />', () => {
  beforeEach(() => {
    render(
      <GlobalContext.Provider value={{ state: { userData: {} } }}>
        <BrowserRouter>
          <HomeView videos={MockData} changeUrl={changeUrl} location={{ search: '' }} />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });

  test('Section Title is rendered', async () => {
    const text = screen.getAllByText('For You');
    expect(text).toBeDefined();
  });

  test('Video Container is rendered', async () => {
    const container = screen.getByTestId('videos');
    expect(container).toBeDefined();
  });

  test('Videos are rendered', async () => {
    const videos = screen.getAllByTestId('video');
    expect(videos.length).toBe(MockData.items.length);
  });
  test('Videos with search are rendered', async () => {
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key);
    const videos = screen.getAllByTestId('video');
    expect(videos.length).toBe(MockData.items.length);
    expect(changeUrl).toHaveBeenCalled();
  });
  test('changeUrl is called to fetch data', async () => {
    expect(changeUrl).toHaveBeenCalled();
  });
});
