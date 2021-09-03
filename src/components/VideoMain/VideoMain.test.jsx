import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalContext from '../../utils/state/GlobalContext';
import MockData from '../../utils/video-data.json';
import VideoMain from './VideoMain.component';

const Data = MockData.items[0];

beforeEach(() => {
  render(
    <GlobalContext.Provider value={{ state: { userData: {} } }}>
      <VideoMain video={Data} />
    </GlobalContext.Provider>
  );
});

describe('<VideoMain />', () => {
  test('VideoMain is rendered', async () => {
    const iframe = screen.getByTestId('iframe');
    expect(iframe).toBeDefined();
  });
  test('Tags are rendered', async () => {
    const tags = screen.getAllByTestId('tag');
    expect(tags.length).toBe(Data.snippet.tags.length);
  });
});
