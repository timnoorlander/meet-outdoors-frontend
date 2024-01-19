import {
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BREAKPOINTS } from "@/constants";

export function TabBar() {
  return (
    <StyledBottomNavigation
      showLabels
      value="Recents"
      onChange={(event, newValue) => {
        // setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Events" icon={<ForestIcon />} />
      <BottomNavigationAction label="Create event" icon={<AddIcon />} />
      <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
    </StyledBottomNavigation>
  );
}

const StyledBottomNavigation = styled(BottomNavigation)`
  @media screen and (min-width: ${BREAKPOINTS.sm.max}px) {
    display: none;
  }
`;
