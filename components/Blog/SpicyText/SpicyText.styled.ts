import styled, { keyframes } from "styled-components";

export const fireAnimation = keyframes`
  0% {text-shadow: 0 0 20px #fefcc9,
    10px -10px 30px #feec85,
    -20px -20px 40px #ffae34,
    20px -40px 50px #ec760c,
    -20px -60px 60px #cd4606,
    0 -80px 70px #973716,
    10px -90px 80px #451b0e;}

  100% {text-shadow: 0 0 20px #fefcc9,
    10px -10px 30px #fefcc9,
    -20px -20px 40px #feec85,
    22px -42px 60px #ffae34,
    -22px -58px 50px #ec760c,
    0 -82px 80px #cd4606,
    10px -90px 80px  #973716;}
`

export const SpicyTextWrapper = styled.i`
  background-color: rgba(256,256,256,.03);
  background-image: -webkit-linear-gradient(top, #111, #0c0c0c);
  background-image: -moz-linear-gradient(top, #111, #0c0c0c);
  background-image: -ms-linear-gradient(top, #111, #0c0c0c);
  background-image: -o-linear-gradient(top, #111, #0c0c0c);
  font-family: 'Amethysta', serif;
  text-align: center;
  text-transform: uppercase;
  white-space:nowrap;

  &.fire {
    animation: ${fireAnimation} 1s ease-in-out infinite alternate;
    -moz-animation: ${fireAnimation} 1s ease-in-out infinite alternate;
    -webkit-animation: ${fireAnimation} 1s ease-in-out infinite alternate;
    -o-animation: ${fireAnimation} 1s ease-in-out infinite alternate;
  }

  &.burn {
    animation: ${fireAnimation} .65s ease-in-out infinite alternate;
    -moz-animation: ${fireAnimation} .65s ease-in-out infinite alternate;
    -webkit-animation: ${fireAnimation} .65s ease-in-out infinite alternate;
    -o-animation: ${fireAnimation} .65s ease-in-out infinite alternate;
  }
`;
