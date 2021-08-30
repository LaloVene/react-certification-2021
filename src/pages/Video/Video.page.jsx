import React, { useEffect } from 'react';
import styled from 'styled-components';

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

function VideoHome({ match, changeUrl, videos }) {
  const [{ isLoading, isError, data }, changeRelatedUrl] = useVideos();

  useEffect(() => {
    changeUrl(`&id=${match.params.id}`);
  }, [changeUrl, match.params.id]);
  useEffect(() => {
    changeRelatedUrl(`&relatedToVideoId=${match.params.id}`);
  }, [changeRelatedUrl, match.params.id]);

  return (
    <Container>
      {videos?.items && (
        <VideoMain
          id={match.params.id}
          video={videos?.items[0]}
          isLoading={isLoading}
          isError={isError}
        />
      )}
      {data?.items && <RelatedVideos id={match.params.id} videos={data} />}
    </Container>
  );
}

export default VideoHome;
