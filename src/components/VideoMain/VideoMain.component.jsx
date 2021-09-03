import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoAdd } from 'react-icons/io5';
import GlobalContext from '../../utils/state/GlobalContext';

import VideoPlayer from '../VideoPlayer';
import Tag from '../Tag';
import Button from '../Button';

const Container = styled.div`
  width: 100%;
  max-width: 55rem;
  padding: 1rem;

  @media (max-width: 850px) {
    width: 100%;
  }
  @media (min-width: 850px) {
    overflow: hidden;
    max-width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryTextColor};
`;
const Description = styled.p`
  font-size: 0.8rem;
  max-width: 50vw;
  word-wrap: break-word;
  color: ${(props) => props.theme.secondaryTextColor};
  @media (max-width: 629px) {
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
  color: ${(props) => props.theme.primaryTextColor};
`;

function VideoMain({ video }) {
  const { state, dispatch } = useContext(GlobalContext);

  const { title } = video.snippet;
  const { id } = video;
  const { description } = video.snippet;
  const { tags } = video.snippet;
  const thumbnail = video.snippet.thumbnails.medium.url;
  const { channelTitle } = video.snippet;

  const addToFavorites = () => {
    const videoData = {
      id,
      title,
      channelTitle,
      thumbnail,
    };

    if (state.favorites.find((favVideo) => favVideo.id === videoData.id)) return;

    let newFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    newFavorites = [...newFavorites, videoData];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    dispatch({ type: 'ADD_FAVORITE', payload: videoData });
  };

  return (
    <Container>
      <VideoPlayer id={id} />
      <Title>{title}</Title>
      {state.userData?.id && (
        <Button onClick={addToFavorites}>
          {' '}
          <IoAdd /> Add to Favorites
        </Button>
      )}
      <Description>{description}</Description>
      {tags && (
        <>
          <TagTitle>Tags</TagTitle>
          <TagContainer>
            {tags?.map((tag) => (
              <Tag data-testid="tag" key={tag}>
                {tag}
              </Tag>
            ))}
          </TagContainer>
        </>
      )}
    </Container>
  );
}

export default VideoMain;
