import styled from "styled-components";
import { Header } from "./Header";
import { TabBar } from "./TabBar";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const { pathname } = useLocation();
  const routesWithoutMobileNav = ["/login", "/register"];
  const isMobileNavVisible = !routesWithoutMobileNav.includes(pathname);

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
