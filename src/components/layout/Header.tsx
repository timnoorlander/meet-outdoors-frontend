import styled, { css } from "styled-components";
import { theme } from "../../constants/theme";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Content>
        <TitleLink to="/">
          <Title>
            Meet<TitleMiddlePart>Outdoors</TitleMiddlePart>.io
          </Title>
        </TitleLink>
        <Navigation>
          <ul>
            <NavigationItem>
              <HeaderNavButton to="/">Outdoor Activities</HeaderNavButton>
            </NavigationItem>
            <NavigationItem>
              <HeaderNavButton to="how-it-works">How it works</HeaderNavButton>
            </NavigationItem>
            <NavigationItem>
              <HeaderNavButton to="blog">Blog</HeaderNavButton>
            </NavigationItem>
          </ul>
        </Navigation>
        <Link to="create-new-activity">
          <HeaderButton>Create new activity</HeaderButton>
        </Link>
      </Content>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  opacity: 0.9;
  background: ${theme.color.primary};
  color: white;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10vw;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  color: white;
`;

const TitleMiddlePart = styled.span`
  color: ${theme.color.lightGreen};
`;

// TODO: button underline is gone.

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

const headerButtonBase = css`
  background: transparent;
  color: white;
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    border: 2px solid white;
  }
`;

const HeaderNavButton = styled(NavLink)`
  ${headerButtonBase}

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

const HeaderButton = styled.button`
  ${headerButtonBase}

  border: 2px solid white;

  &:hover {
    background: white;
    color: ${theme.color.primary};
  }
`;
