import { act, renderHook } from '@testing-library/react-hooks';
import { useVideos } from './useVideos';

describe('Hook: UseVideo', () => {
  test('No Action fetch nothing', async () => {
    global.fetch = jest.fn();

    await renderHook(() => useVideos());

    expect(global.fetch).not.toBeCalled();
  });

  test('Call API with search term', async () => {
    global.fetch = jest.fn();

    const { result } = await renderHook(() => useVideos());
    const changeUrl = result.current[1];

    const searchTerm = 'test';

    await act(async () => {
      changeUrl(`&q=${searchTerm}`);
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toContain(`&q=${searchTerm}`);
  });

  test('Call API with video id', async () => {
    global.fetch = jest.fn();

    const { result } = await renderHook(() => useVideos());
    const changeUrl = result.current[1];

    const videoId = 'videoID';

    await act(async () => {
      changeUrl(`&id=${videoId}`);
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toContain(`&id=${videoId}`);
  });
});
