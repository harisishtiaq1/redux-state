import { React, useEffect, useState } from "react";
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
import InputBase from "@mui/material/InputBase";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, List, ListItem, Menu, MenuItem ,Link} from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";
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

    // backgroundColor: isActive ? "white" : "transparent",
  };
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginRight: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  color: "black",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledListItem = styled(ListItem)(({ path, activeLink }) => ({
  backgroundColor: path === activeLink ? "blueViolet" : "inherit",
}));

function SideBar({ children }) {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLink, setActiveLink] = useState("/");
  const open = Boolean(anchorEl);
  const handleClick = (MouseEvent) => {
    setAnchorEl(MouseEvent.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleActiveLink = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
            <NavLink to ='/' style={{textDecoration:'none',color:'white'}}>
            <Typography variant="h6" noWrap component="div" sx={{ ml: 2 }}>
              React Redux
            </Typography>
            </NavLink>
          </Toolbar>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "ture" : undefined}
              sx={{
                '&:hover':{
                  color:'cyan'
                }
              }}
              fontSize='large'
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
              <List>
                <StyledLink to="/" style={navLinkStyles}>
                  <StyledListItem
                    path="/"
                    activeLink={activeLink}
                    onClick={() => handleActiveLink("/")}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "orange",
                      },
                    }}
                  >
                    <HomeIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                    Home
                  </StyledListItem>
                </StyledLink>
                <StyledLink
                  to="/posts"
                  sx={{ cursor: "pointer" }}
                  style={navLinkStyles}
                >
                  <StyledListItem
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "orange",
                      },
                    }}
                    path="/posts"
                    activeLink={activeLink}
                    onClick={() => handleActiveLink("/posts")}
                  >
                    <EmailIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                    Posts
                  </StyledListItem>
                </StyledLink>
                <StyledLink
                  to="/comments"
                  sx={{ cursor: "pointer" }}
                  style={navLinkStyles}
                >
                  <StyledListItem
                    path="/comments"
                    activeLink={activeLink}
                    onClick={() => handleActiveLink("/")}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "orange",
                      },
                    }}
                  >
                    <CommentIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                    Comments
                  </StyledListItem>
                </StyledLink>
                <StyledLink
                  to="/albums"
                  sx={{ cursor: "pointer" }}
                  style={navLinkStyles}
                >
                  <StyledListItem
                    path="/albums"
                    activeLink={activeLink}
                    onClick={() => handleActiveLink("/albums")}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "orange",
                      },
                    }}
                  >
                    <PhotoLibraryIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                    Albums
                  </StyledListItem>
                </StyledLink>
                <StyledLink
                  to="/todos"
                  sx={{ cursor: "pointer" }}
                  style={navLinkStyles}
                >
                  <StyledListItem
                    path="/todos"
                    activeLink={activeLink}
                    onClick={() => handleActiveLink("/todos")}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "orange",
                      },
                    }}
                  >
                    <ListIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                    Todos
                  </StyledListItem>
                </StyledLink>
                <StyledLink
                  to="/users"
                  sx={{ cursor: "pointer" }}
                  style={navLinkStyles}
                >
                  <StyledListItem
                    path="/users"
                    activeLink={activeLink}
                    onClick={() => handleActiveLink("/users")}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "orange",
                        fontweight: "bold",
                      },
                    }}
                  >
                    <PersonIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                    Users
                  </StyledListItem>
                </StyledLink>
              </List>
            </Box>
          </Drawer>
          <Box
            sx={{ mt: 8, flexGrow: 1, ml: 30, width: 1107, p: 3 }}
            component="main"
          >
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
