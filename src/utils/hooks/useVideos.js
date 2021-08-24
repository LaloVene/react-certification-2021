import { useState, useEffect, useReducer } from 'react';
// import Data from '../../utils/related-videos.json'

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20';
const VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video';
const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

function useVideos() {
  const searchUrl = `${SEARCH_URL}&key=${API_KEY}`;
  const videoUrl = `${VIDEO_URL}&key=${API_KEY}`;
  const [url, setUrl] = useState(searchUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  const changeUrl = (params) => {
    if (params.includes('&id=')) {
      setUrl(videoUrl + params);
    } else {
      setUrl(searchUrl + params);
    }
  }

  function dataFetchReducer(state, action) {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: {...action.payload},
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    
    async function fetchData() {
      // For test purposes
      // if (true) {
      //   dispatch({ type: 'FETCH_SUCCESS', payload: Data });
      //   return;
      // }
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
        // console.error('Bad data: ', error);
      }
    }

    if ( url !== searchUrl ) fetchData();
  }, [url, searchUrl]);

  return [state, changeUrl];
}

export { useVideos };
