import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from '../../utils/state/GlobalContext';

import VideoList from './VideoList.component';

const mockVideo = {
  id: 'video-id',
  title: 'video-title',
  thumbnail: 'video-thumbnail',
  channelTitle: 'video-channel-name',
  isRelated: true,
};

beforeEach(() => {
  render(
    <GlobalContext.Provider value={{ state: { userData: {} } }}>
      <BrowserRouter>
        <VideoList {...mockVideo} />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
});

describe('<VideoList />', () => {
  it('Video should render correctly', () => {
    const title = screen.getByText(mockVideo.title);
    const channelTitle = screen.getByText(mockVideo.channelTitle);
    const thumbnail = screen.getByAltText('Video Thumbnail');

    expect(title).toBeDefined();
    expect(thumbnail).toBeDefined();
    expect(channelTitle).toBeDefined();
  });
});
