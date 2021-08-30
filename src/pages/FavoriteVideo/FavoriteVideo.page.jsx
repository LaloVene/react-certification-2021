import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import GlobalContext from '../../utils/state/GlobalContext';

import VideoMain from '../../components/VideoMain';
import RelatedVideos from '../../components/RelatedVideos';

import { useVideos } from '../../utils/hooks/useVideos';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  height: 78vh;
  overflow-y: auto;
  margin: 0 auto;
  @media (max-width: 1068px) {
    height: 91vh;
  }
  justify-content: center;
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

function FavoriteVideo({changeUrl, videos}) {
  const { state } = useContext(GlobalContext);
  const [{ isLoading, isError }] = useVideos();
  const { id } = useParams();

  useEffect(() => {
    changeUrl(`&id=${id}`);
  }, [changeUrl, id])

  return (
    <Container>
      {videos?.items && (
        <VideoMain
          id={id}
          video={videos?.items[0]}
          isLoading={isLoading}
          isError={isError}
        />
      )}
      {state.favorites && (
        <RelatedVideos id={id} videos={{ items: state.favorites }} isFav />
      )}
    </Container>
  );
}

export default FavoriteVideo;
