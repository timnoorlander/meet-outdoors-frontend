import {
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </StyledBottomNavigation>
  );
}

const StyledBottomNavigation = styled(BottomNavigation)`
  @media screen and (min-width: ${BREAKPOINTS.sm.max}px) {
    display: none;
  }
`;
