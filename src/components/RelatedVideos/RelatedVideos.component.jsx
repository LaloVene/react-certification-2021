import React from 'react';
import styled from 'styled-components';
import VideList from '../VideoList';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
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

function RelatedVideos(props) {

  return (
    <Container>
      <Title>Up next</Title>
      {
        props.videos?.items[0]?.snippet &&
        <Videos>
          {props.videos?.items?.map((video, index) => {
            let id = '';
            let title = '';
            let channelTitle = '';
            let thumbnail = '';
            try {
              id = video.id.videoId;
              title = video.snippet.title;
              channelTitle = video.snippet.channelTitle;
              thumbnail = video.snippet.thumbnails.medium.url;
            } catch {
              return null;
            }

            return (
              <VideList
                isRelated={true}
                key={id}
                id={id}
                title={title}
                thumbnail={thumbnail}
                channelTitle={channelTitle}
              />
            );
          })}
        </Videos>
      }
    </Container>
  );
}

export default RelatedVideos;
