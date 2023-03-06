import { React, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CommentIcon from "@mui/icons-material/Comment";
import EmailIcon from "@mui/icons-material/Email";
import ListIcon from "@mui/icons-material/List";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PersonIcon from "@mui/icons-material/Person";
import InputBase from '@mui/material/InputBase';
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, List, ListItem, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled,alpha } from "@mui/system";
import Person3SharpIcon from "@mui/icons-material/Person3Sharp";
import logo from "./img/logo.svg";
const drawerWidth = 240;
const Holder = styled(AppBar)(({ theme }) => ({
  // zIndex: theme.zIndex.drawer + 1,
}));
const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "cyan" : "white",
  };
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'blueViolet',
  border:'2px solid black',
  marginRight: 3,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  color:'black',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SideBar({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (MouseEvent) => {
    setAnchorEl(MouseEvent.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <Holder> */}
        <Holder
          sx={{
            backgroundColor: "blueviolet",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Toolbar sx={{}}>
            <Box component="img" alt="img" sx={{ height: 35 }} src={logo}></Box>
            <Typography variant="h6" noWrap component="div" sx={{ ml: 2 }}>
              React Redux
            </Typography>
          </Toolbar>
          <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <IconButton
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "ture" : undefined}
            >
              <Person3SharpIcon />
            </IconButton>
          </Toolbar>
        </Holder>
        {/* </Holder> */}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "Black",
                width: drawerWidth,
                flexShrink: 0,
                mt: 8,
              },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box
              p={2}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              width="200px"
            >
              <List >
                <ListItem >
                  <HomeIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                  <StyledLink
                    to="/"
                    sx={{ cursor: "pointer" }}
                    style={navLinkStyles}
                  >
                    Home
                  </StyledLink>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <EmailIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                  <StyledLink
                    to="/posts"
                    sx={{ cursor: "pointer" }}
                    style={navLinkStyles}
                  >
                    Posts
                  </StyledLink>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <CommentIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                  <StyledLink
                    to="/comments"
                    sx={{ cursor: "pointer" }}
                    style={navLinkStyles}
                  >
                    Comments
                  </StyledLink>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <PhotoLibraryIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                  <StyledLink
                    to="/albums"
                    sx={{ cursor: "pointer" }}
                    style={navLinkStyles}
                  >
                    Albums
                  </StyledLink>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <ListIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                  <StyledLink
                    to="/todos"
                    sx={{ cursor: "pointer" }}
                    style={navLinkStyles}
                  >
                    Todos
                  </StyledLink>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <PersonIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                  <StyledLink
                    to="/users"
                    sx={{ cursor: "pointer" }}
                    style={navLinkStyles}
                  >
                    Users
                  </StyledLink>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Box sx={{ mt: 8, flexGrow: 1, ml: 30, width: 1107 }} component="main">
            {children}
          </Box>
        </Box>
      </Box>
      <Menu
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "resources-button" }}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>Blogs</MenuItem>
        <MenuItem onClick={handleClose}>Contacts</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
export default SideBar;
