import styled from "styled-components";
import { Header } from "./Header";
import { BREAKPOINTS } from "@/constants";
import { TabBar } from "./TabBar";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const isSmallScreen = window.innerWidth <= BREAKPOINTS.sm.max;
  const isLargeScreen = !isSmallScreen;

  return (
    <MainContainer>
      {isLargeScreen && <Header />}
      <ContentContainer>{children}</ContentContainer>
      {isSmallScreen && <TabBar />}
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
