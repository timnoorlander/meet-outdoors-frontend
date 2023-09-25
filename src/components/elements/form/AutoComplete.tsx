import { theme } from "@/theme";
import { useState } from "react";
import {
  ComboBox,
  Label,
  Popover,
  ListBox,
  Item,
  Button,
  Input,
} from "react-aria-components";
import styled, { css } from "styled-components";

type Props = {
  label: string;
  children: React.ReactNode;
};

export function AutoComplete({ label, children }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ComboBox>
      <Label>{label}</Label>
      <AutoCompleteContainer isFocused={isFocused}>
        <StyledInput
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <StyledButton>▼</StyledButton>
      </AutoCompleteContainer>
      <StyledPopover>
        <StyledListBox>{children}</StyledListBox>
      </StyledPopover>
    </ComboBox>
  );
}

export const AutoCompleteItem = Item;

const AutoCompleteContainer = styled.div<{ isFocused: boolean }>`
  border-radius: 4px;
  border: 1px solid ${theme.color.grey};
  padding: 1px;
  outline: 1px solid transparent;

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid ${theme.color.primary};
      outline: 1px solid ${theme.color.primary};
    `}
`;

const StyledInput = styled(Input)`
  padding: 10px 14px;
  border: none;

  &:focus-visible {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  padding: 10px;
  border: none;
  background: white;
  color: ${theme.color.grey};
  cursor: pointer;
`;

const StyledPopover = styled(Popover)`
  width: 100%;
`;

const StyledListBox = styled(ListBox)`
  background: white;
  border: 1px solid ${theme.color.primary};
  border-radius: 4px;
  width: 100%;
`;
