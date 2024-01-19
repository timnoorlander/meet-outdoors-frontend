import styled from "styled-components";
import { Header } from "./Header";
import { TabBar } from "./TabBar";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const routesWithoutMobileNav = ["/login", "/about"];
  const isMobileNavVisible = !routesWithoutMobileNav.includes(
    window.location.pathname
  );

  return (
    <MainContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      {isMobileNavVisible && <TabBar />}
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
