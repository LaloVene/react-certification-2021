import React from 'react';
import { render } from '@testing-library/react';

import VideoPlayer from './VideoPlayer.component';

const TEST_VIDEO_ID = '7hEPj13PUGc';

describe('<VideoPlayer />', () => {
  test('VideoPlayer is rendered', async () => {
    const { getByTestId } = await render(<VideoPlayer id={TEST_VIDEO_ID} />);
    const iframe = getByTestId('iframe');
    expect(iframe).toBeDefined();
  });
});
