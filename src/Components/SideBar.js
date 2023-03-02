import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {  List, ListItem } from "@mui/material";
import {Link} from "react-router-dom"
import { styled } from "@mui/system";

const drawerWidth = 240;
const Holder = styled(AppBar)(({ theme }) => ({
  // zIndex: theme.zIndex.drawer + 1,
}));
export default function PermanentDrawerLeft({ children }) {
  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      {/* <Holder> */}
      <Holder
       sx={{ backgroundColor: "blueviolet" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Redux Task
          </Typography>
        </Toolbar>
      </Holder>
      {/* </Holder> */}
      <Drawer
        sx={{
          backgroundColor: "black",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box p={2} sx={{ textAlign: "center" }} width="200px">
          <List>
            <ListItem>
              <Link to="/" sx={{ cursor: "pointer" }}>
                Home
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link to="/posts" sx={{ cursor: "pointer" }}>Posts</Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link to="/comments" sx={{ cursor: "pointer" }}>Comments</Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link to='/albums' sx={{ cursor: "pointer" }}>Albums</Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link to='/todos' sx={{ cursor: "pointer" }}>Todos</Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link to='/users' sx={{ cursor: "pointer" }}>Users</Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{mt:8}}>
      <main>{children}</main>
      </Box>
    </Box>
  );
}
