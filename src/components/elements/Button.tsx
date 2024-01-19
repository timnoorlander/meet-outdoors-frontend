import { theme } from "@/constants/theme";
import styled, { css } from "styled-components";

type Props = {
  isFullWidth?: boolean;
};

export const Button = styled.button<Props>`
  background: ${theme.color.primary};
  color: white;
  border: 2px solid ${theme.color.primary};
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 900;
  font-style: italic;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  ${(props) =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}

  &:hover {
    background: white;
    color: ${theme.color.primary};
    border: 2px solid white;
  }
`;
