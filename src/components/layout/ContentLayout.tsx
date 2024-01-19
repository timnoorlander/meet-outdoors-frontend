import styled from "styled-components";

type Props = {
  backgroundUrl?: string;
};

export const ContentLayout = styled.div<Props>`
  padding: 3rem 1rem 1rem 1rem;
  min-height: 100%;
`;
