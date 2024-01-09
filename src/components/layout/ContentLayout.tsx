import styled, { css } from "styled-components";

type Props = {
  backgroundUrl?: string;
};

export const ContentLayout = styled.div<Props>`
  padding: 128px 10vw 60px;
  ${(props) => {
    console.log(props);
    return props.backgroundUrl
      ? css`
          background-image: url(${props.backgroundUrl});
          background-size: cover;
          background-position: center;
        `
      : null;
  }}
  height: 100%;
`;
