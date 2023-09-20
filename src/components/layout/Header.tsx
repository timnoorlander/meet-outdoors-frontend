import styled from "styled-components";
import { theme } from "../../theme";
import { NavLink } from "react-router-dom";
import { Button } from "../elements/Button";

export function Header() {
  return (
    <Container>
      <Content>
        <Title>
          Meet<TitleMiddlePart>Outdoors</TitleMiddlePart>.io
        </Title>
        <Navigation>
          <ul>
            <NavigationItem>
              <StyledNavLink to="/">Outdoor Activities</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="how-it-works">How it works</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="blog">Blog</StyledNavLink>
            </NavigationItem>
          </ul>
        </Navigation>
        <HeaderButton>Create new activity</HeaderButton>
      </Content>
    </Container>
  );
}

const Container = styled.header`
  position: absolute;
  z-index: 100000000;
  height: 42px;
  opacity: 0.9;
  background: ${theme.color.primary};
  color: white;
  padding: 16px 0;
  width: 100vw;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const TitleMiddlePart = styled.span`
  color: ${theme.color.lightGreen};
`;

const Navigation = styled.nav``;

const NavigationItem = styled.li`
  display: inline;
  margin-left: 10px;
  margin-right: 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const StyledNavLink = styled(NavLink).attrs({ as: Button })`
  background: transparent;
  border: 2px solid transparent;

  &:hover {
    color: white;
    background: transparent;
  }

  // The "active" class is added by react-router
  &.active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
`;

const HeaderButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;
`;
