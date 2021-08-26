import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../utils/state/GlobalContext';
import VideoList from '../../components/VideoList';
import NotFound from '../../pages/NotFound';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primaryBackgroundColor};
  padding: 1rem;
`;
const Heading = styled.h1`
  font-weight: lighter;
  font-size: 1.5rem;
  margin: 1rem 0 0 1rem;
  color: ${(props) => props.theme.primaryTextColor};
  margin: 2rem 0;
  text-transform: uppercase;
`;
const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  `;
const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(10rem, 100%, 15rem);
  @media (max-width: 629px) {
    width: 100%;
  }
`;

function Favorites() {
  const { state, dispatch } = useContext(GlobalContext);

  const removeFromFavorites = (id) => {
    let newFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    newFavorites = newFavorites.filter((favorite) => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    dispatch({type: 'REMOVE_FAVORITE', payload: id,});
  };

  return (
    <Container>
      <Heading>Favorites</Heading>
      {state.favorites.length === 0 ? (
        <NotFound title="Nothing here" message="You have no favorites yet." />
      ) : (
        <VideoListContainer>
          {state.favorites.map((favorite) => {
            const { id, title, channelTitle, thumbnail } = favorite;
            return (
              <VideoContainer key={id}>
                <VideoList
                  id={id}
                  title={title}
                  thumbnail={thumbnail}
                  channelTitle={channelTitle}
                  onClick={() => removeFromFavorites(id)}
                  isFav
                />
              </VideoContainer>
            );
          })}
        </VideoListContainer>
      )}
    </Container>
  );
}

export default Favorites;
