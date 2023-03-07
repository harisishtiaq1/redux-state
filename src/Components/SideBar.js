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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";
import Person3SharpIcon from "@mui/icons-material/Person3Sharp";
import logo from "./img/logo.svg";
const drawerWidth = 200;

const Holder = styled(AppBar)(({ theme }) => ({
  
}));
const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "white" : "white",
  };
};
const navItems = [
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "Posts", to: "/posts", icon: EmailIcon },
  { name: "Comments", to: "/comments", icon: CommentIcon },
  { name: "Albums", to: "/albums", icon: PhotoLibraryIcon },
  { name: "Todos", to: "/todos", icon: ListIcon },
  { name: "Users", to: "/users", icon: PersonIcon },
];
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
  backgroundColor: path === activeLink ? "Brown" : "inherit",
  borderRadius:'5%'
}));

function SideBar({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",mt:10 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={NavLink} to={item.to}>
            <ListItemIcon>
              <item.icon/>
            </ListItemIcon>
              <ListItemText primary={item.name} sx={{
                "&:hover":{
                  color:'red'
                }
              }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <Holder> */}
        <Holder
          sx={{
            backgroundColor: "brown",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Toolbar sx={{}}>
            <Box component="img" alt="img" sx={{ height: 35 }} src={logo}></Box>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
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
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Person3SharpIcon fontSize="large" />
            </IconButton>

            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon
                fontSize="large"
                sx={{ display: { xs: "block", sm: "none" } }}
              />
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
                display: { xs: "none", sm: "block" },
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
                {navItems.map((item) => (
                  <StyledLink to={item.to} style={navLinkStyles}>
                    <StyledListItem
                      path={item.to}
                      activeLink={activeLink}
                      onClick={() => handleActiveLink(item.to)}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "orange",
                        },
                      }}
                    >
                      <item.icon sx={{ color: "white", mr: 2, mb: 0.5 }} />
                      {/* <HomeIcon  /> */}
                      {item.name}
                    </StyledListItem>
                  </StyledLink>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box
            sx={{
              mt: 8,
              flexGrow: 1,
              ml: { xs: 0, sm: 30 },
              width: { xs: 900, sm: 1107 },
              p: 3,
            }}
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
      <Box component="drawer">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor:'brown',
              color:'white',
              display:'flex',
              alignItems:'center',
              // justifyContent:'center'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
export default SideBar;
