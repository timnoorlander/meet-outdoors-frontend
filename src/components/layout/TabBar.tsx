import {
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation, useNavigate } from "react-router-dom";

export function TabBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function onNavigate(
    _event: React.SyntheticEvent<Element, Event>,
    newPath: string
  ) {
    navigate(newPath);
  }

  return (
    <StyledBottomNavigation showLabels value={pathname} onChange={onNavigate}>
      <BottomNavigationAction
        label="Activities"
        value="/"
        icon={<ForestIcon />}
      />
      <BottomNavigationAction
        label="Create activity"
        value="/create-new-activity"
        icon={<AddIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<PersonIcon />}
      />
    </StyledBottomNavigation>
  );
}

const StyledBottomNavigation = styled(BottomNavigation)`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;
