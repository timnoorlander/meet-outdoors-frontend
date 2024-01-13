import styled from "styled-components";
import { Header } from "./Header";
import { TabBar } from "./TabBar";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <TabBar />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  flex: 1;
`;
