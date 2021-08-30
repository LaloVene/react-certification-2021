import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;
`;
const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  background: black;
`;

function VideoPlayer(props) {
  return (
    <Container>
      <Frame
        data-testid="iframe"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Container>
  );
}

export default VideoPlayer;
