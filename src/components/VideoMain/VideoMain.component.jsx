import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoAdd } from 'react-icons/io5';
import GlobalContext from '../../utils/state/GlobalContext';

import VideoPlayer from '../../components/VideoPlayer';
import Tag from '../../components/Tag';
import Button from '../../components/Button';

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
  const { state, dispatch } = useContext(GlobalContext);

  const title = video.snippet.title;
  const id = video.id;
  const description = video.snippet.description;
  const tags = video.snippet.tags;
  const thumbnail = video.snippet.thumbnails.medium.url;
  const channelTitle = video.snippet.channelTitle;

  const addToFavorites = () => {
    const videoData = {
      id,
      title,
      channelTitle,
      thumbnail,
    }
    console.log('add to favorites', videoData);

    if (state.favorites.find(video => video.id === videoData.id)) return;

    let newFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    newFavorites = [...newFavorites, videoData];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    dispatch({type: "ADD_FAVORITE", payload: videoData});
  }

  return (
    <Container>
      <VideoPlayer id={id} />
      <Title>{title}</Title>
      <Button onClick={addToFavorites}> <IoAdd/> Add to Favorites</Button>
      <Description>{description}</Description>
      {tags && (
        <>
          <TagTitle>Tags</TagTitle>
          <TagContainer>
            {tags?.map((tag) => (
              <Tag role="tag" key={tag}>
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
