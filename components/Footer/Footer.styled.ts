import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: block ;
  width: 100%;
  font-family: 'Outfit', sans-serif;
  border-top: 1px solid rgb(188 184 184 / 50%);
  margin-top: 10rem;
  max-width: 76rem;
  margin: auto;
  margin-top: 10rem;
  color: ${({theme}) => theme.colours.bodyFaint};
;

  .content {
    max-width: 80rem;
    padding: 3rem 1rem;
  }

  b {
    display: block;
    margin-bottom: 0.75rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .bio {}
  .contact {}
  .general {}

  .bottom {
    display: flex;
    flex-wrap: wrap;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      width: fit-content;
      position: relative;
      padding: 0.5rem 0;

      &:hover {
        >span {
          width: 105%;
        }
      }
    }
  }

  .sitemap {
    
  }

  .copyright {
    opacity: 0.8
  }
`;