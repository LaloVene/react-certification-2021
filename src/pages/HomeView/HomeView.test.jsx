import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import MockData from '../../utils/related-videos.json';

import HomeView from './HomeView.page';

const changeUrl = jest.fn();
describe('<HomeView />', () => {
  beforeEach(() => {
    // configurar un elemento del DOM como objetivo del renderizado
    render(<BrowserRouter>
            <HomeView videos={MockData} changeUrl={changeUrl} location={{search: ""}}/>+
          </BrowserRouter>);
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
    const videos = screen.getAllByRole('video');
    expect(videos.length).toBe(MockData.items.length);
  });
  test('Videos with search are rendered', async () => {
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key);
    const videos = screen.getAllByRole('video');
    expect(videos.length).toBe(MockData.items.length);
    expect(changeUrl).toHaveBeenCalled();
  });
  
  test('changeUrl is called to fetch data', async () => {
    expect(changeUrl).toHaveBeenCalled();
  });
});
