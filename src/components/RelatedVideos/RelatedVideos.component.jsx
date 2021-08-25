import React from 'react';
import styled from 'styled-components';
import VideoList from '../VideoList';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1320px) {
    max-width: 20rem;
  }
`;
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.primaryTextColor};
`;
const Videos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function RelatedVideos({videos, isFav}) {

  return (
    <Container>
      <Title>Up next</Title>

        <Videos>
          {videos?.items?.map((video) => {
            let id = '';
            let title = '';
            let channelTitle = '';
            let thumbnail = '';
            if (isFav) {
              ({id, title, channelTitle, thumbnail} = video);
            } else {
              try {
                id = video.id.videoId;
                title = video.snippet.title;
                channelTitle = video.snippet.channelTitle;
                thumbnail = video.snippet.thumbnails.medium.url;
              } catch {
                return null;
              }
            }

            return (
              <VideoList
                isRelated={true}
                key={id}
                id={id}
                title={title}
                thumbnail={thumbnail}
                channelTitle={channelTitle}
                isFav={isFav}
              />
            );
          })}
        </Videos>
    </Container>
  );
}

export default RelatedVideos;
