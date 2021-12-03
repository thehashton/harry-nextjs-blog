import styled from "styled-components";

export const PostArticle = styled.article`
transition: all 0.15s ease-in-out;
opacity: 1;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;
