import React, {useEffect} from 'react';
import styled from 'styled-components';
import VideoList from '../../components/VideoList';

const Wrapper = styled.div`
  height: 78vh;
  /* height: 85.5vh; */
  overflow-y: auto;
  @media (max-width: 1068px) {
    height: 92.6vh;
  }
  @media (max-width: 600px) {
    height: 94.5vh;
  }
`;
const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
const Heading = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0 0 1rem;
  color: ${props => props.theme.primaryTextColor};
`;

function HomeView({changeUrl, videos, location}) {

  useEffect(() => {
    const searchTerm = new URLSearchParams(location.search).get("q");
    if (searchTerm) {
      changeUrl(`&q=${searchTerm}`);
    } else {
      changeUrl(`&`);
    }
  }, [changeUrl, location])

  return (
    <Wrapper>
      <Heading>{'For You'}</Heading>
      <VideoContainer data-testid="videos">
        {videos?.items?.map((video, index) => {
          const title = video.snippet.title;
          const channelTitle = video.snippet.channelTitle;
          const thumbnail = video.snippet.thumbnails.medium.url;
          const id = video.id.videoId;

          return (
            <VideoList
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              channelTitle={channelTitle}
            />
          );
        })}
      </VideoContainer>
    </Wrapper>
  );
}

export default HomeView;
