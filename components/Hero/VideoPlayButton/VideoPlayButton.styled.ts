import styled from "styled-components";
import ReactPlayer from 'react-player';

export const HeroVideoContainer = styled.div`
  display: block;
`;

export const ReactVideoPlayer = styled(ReactPlayer)`
  position: absolute;
  z-index: 3;
  right: 0;
  top: 5%;

  div {
    background: transparent;
  }

  .html5-video-container {
    video {
      border-radius: 20px;
      background-color: transparent;
    }
  }
`;

export const VideoPlayButtonWrapper = styled.div`
  position: absolute;
  width: 140px;
  top: 33%;
  right: 5%;

  .videoPlayButton {
    position: relative;
    z-index: 2;
    margin:30px;
    box-sizing: content-box;
    display: block;
    width: 32px;
    height: 44px;
    background: #5b5758;
    border-radius: 50%;
    padding: 18px 20px 18px 28px;

      &:before {
      content: "";
      position: absolute;
      z-index: 0;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 80px;
      height: 80px;
      background: #4e4c4c;
      border-radius: 50%;
      animation: pulse-border 3500ms ease-out infinite;
    }

    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 80px;
      height: 80px;
      background: #3a3838;
      border-radius: 50%;
      transition: all 200ms;
    }

    &:hover {
      cursor: pointer;
      
      &:after {
      background-color: darken(#fa183d, 10%);
    }
    }

    img {
      position: relative;
      z-index: 3;
      max-width: 100%;
      width: auto;
      height: auto;
    }

    span {
      display: block;
      position: relative;
      z-index: 3;
      width: 0;
      height: 0;
      border-left: 32px solid #fff;
      border-top: 22px solid transparent;
      border-bottom: 22px solid transparent;
    }
  }

  @keyframes pulse-border {
    0% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }
`;
