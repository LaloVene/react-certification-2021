import React from 'react';
import styled from 'styled-components';

import VideoPlayer from '../../components/VideoPlayer';
import Tag from '../../components/Tag';

const Container = styled.div`
  width: 100%;
  max-width: 55rem;
  padding: 1rem;
  
  @media(max-width: 629px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${props => props.theme.primaryTextColor};
`;
const Description = styled.p`
  font-size: 0.8rem;
  max-width: 50vw;
  word-wrap: break-word;
  color: ${props => props.theme.secondaryTextColor};
  @media(max-width: 629px) {
    max-width: 100%;
  }
`;
const TagContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;
const TagTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2rem;
  text-align: center;
  color: ${props => props.theme.primaryTextColor};
`;

function VideoMain({video}) {

  const title = video.snippet.title;
  const id = video.id;
  const description = video.snippet.description;
  const tags = video.snippet.tags;

  return (
    <Container>
      <VideoPlayer id={id} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      {
        tags &&
        <>
          <TagTitle>Tags</TagTitle>
          <TagContainer>
            {tags?.map((tag) => (
              <Tag role="tag" key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </>
      }
    </Container>
  );
}

export default VideoMain;
