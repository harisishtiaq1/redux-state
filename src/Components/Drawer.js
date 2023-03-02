import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {  createTheme, Link, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";

const drawerWidth = 240;
const theme=createTheme();
const Holder = styled(AppBar)(() => ({
  zIndex: theme.zIndex.drawer + 1,
}));
export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Holder>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:"blueviolet" }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Redux Task
          </Typography>
        </Toolbar>
      </AppBar>
      </Holder>
      <Drawer
        sx={{
          backgroundColor:'black',
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
        <Toolbar/>
        <Box p={2} sx={{ textAlign: "center" }} width="200px">
        <List>
          <ListItem>
            <Link sx={{ cursor: "pointer" }}>Home</Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link sx={{ cursor: "pointer" }}>Posts</Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link sx={{ cursor: "pointer" }}>Comments</Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link sx={{ cursor: "pointer" }}>Albums</Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link sx={{ cursor: "pointer" }}>Photos</Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link sx={{ cursor: "pointer" }}>Todos</Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link sx={{ cursor: "pointer" }}>Users</Link>
          </ListItem>
        </List>
      </Box>
      </Drawer>
    </Box>
  );
}
