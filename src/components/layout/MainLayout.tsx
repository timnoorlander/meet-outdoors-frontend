import styled from "styled-components";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  height: 100%;
`;
