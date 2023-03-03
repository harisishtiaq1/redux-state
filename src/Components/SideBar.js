import { React } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CommentIcon from '@mui/icons-material/Comment';
import EmailIcon from '@mui/icons-material/Email';
import ListIcon from '@mui/icons-material/List';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

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

function SideBar({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <Holder> */}
      <Holder sx={{ backgroundColor: "blueviolet",width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
       }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Redux Task
          </Typography>
        </Toolbar>
      </Holder>
      {/* </Holder> */}
      <Box sx={{display:"flex",flexDirection:'row'}}>
      <Drawer
        sx={{
         
          "& .MuiDrawer-paper": {
            backgroundColor: "Black",
            width: drawerWidth,
            flexShrink: 0,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          width="200px"
        >
         
          <List>
            <ListItem>
            <HomeIcon sx={{color:'white',mr:2,mb:0.5}}/>
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
            <EmailIcon sx={{color:'white',mr:2,mb:0.5}}/>
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
            <CommentIcon sx={{color:'white',mr:2,mb:0.5}}/>
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
            <PhotoLibraryIcon sx={{color:'white',mr:2,mb:0.5}}/>
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
            <ListIcon sx={{color:'white',mr:2,mb:0.5}}/>
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
            <PersonIcon sx={{color:'white',mr:2,mb:0.5}}/>
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
      <Box sx={{ mt:7,flexGrow:1,ml:30,
      width:985}} component='main'>
        {children}
      </Box>
      </Box>
    </Box>
  );
}
export default SideBar;