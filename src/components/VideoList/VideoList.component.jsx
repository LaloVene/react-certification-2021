import React, {useContext} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import GlobalContext from '../../utils/state/GlobalContext';

import { FaCheckCircle } from 'react-icons/fa';
import { RiHeartAddFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';

const FloatingButton = styled.div`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.2);
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  color: white;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 15rem;
  width: clamp(10rem, 100%, 15rem);
  overflow: hidden;
  padding: ${(props) => (props.isRelated ? '0.4rem 0;' : '1rem;')};
  @media (max-width: 629px) {
    width: 100%;
  }
  &:hover ${FloatingButton} {
    display: inline-block;
  }
`;
const RouterLink = styled(Link)`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 8.1rem;
  object-fit: cover;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    filter: brightness(0.7);
  }
  @media (max-width: 629px) {
    height: 10rem;
  }
`;
const VideoInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 0.2rem;
`;
const ChannelImage = styled.img`
  flex-basis: 1rem;
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
const VideoText = styled.div`
  border-radius: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0;
`;
const Title = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.primaryTextColor};
`;
const ChannelTitle = styled.p`
  margin: 0;
  font-size: 0.6rem;
  font-weight: 500;
  display: inline;
  overflow: hidden;
  white-space: nowrap;
  color: hsl(0, 0%, 60%);
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  max-inline-size: 12.8rem;
  color: ${props => props.theme.secondaryTextColor};
`;
const CheckIcon = styled(FaCheckCircle)`
  color: #c70d32;
  margin: auto 0;
  margin-right: 0.2rem;
`;

function VideoList({ id, title, channelTitle, isRelated, thumbnail, isFav, onClick }) {
  const { state, dispatch } = useContext(GlobalContext);

  const addToFavorites = () => {
    const videoData = {
      id,
      title,
      channelTitle,
      thumbnail,
    };

    if (state.favorites.find((video) => video.id === videoData.id)) return;

    let newFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    newFavorites = [...newFavorites, videoData];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    dispatch({ type: 'ADD_FAVORITE', payload: videoData });
  };

  return (
    <Container isRelated={isRelated} role="video">
      <RouterLink to={`/${isFav ? 'fav-video' : 'watch'}/${id}`}>
        <Image src={thumbnail} alt="Video Thumbnail" />
      </RouterLink>
      <VideoInfo>
        <ChannelImage
          src={require('../../img/default-user.png')}
          href="user profile image"
        />
        <VideoText>
          <Title>{title}</Title>
          <ChannelTitle>
            {' '}
            <CheckIcon /> {channelTitle}
          </ChannelTitle>
        </VideoText>
      </VideoInfo>
      {
        state.userData?.id &&
        <FloatingButton onClick={isFav ? onClick : addToFavorites}>
          {isFav ? <MdDelete /> : <RiHeartAddFill />}
        </FloatingButton>
      }
    </Container>
  );
}

export default VideoList;
