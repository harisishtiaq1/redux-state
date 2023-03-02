import { Drawer, Link, Box, List, ListItem } from "@mui/material";
import React, { useState } from "react";

function Sidebar() {
  const styles = {
    sideNav: {
      marginTop: "-60px",
      zIndex: 3,
      marginLeft: "0px",
      position: "fixed",
    },
  };
  return (
    <Drawer anchor="left" variant="permanent">
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
  );
}

export default Sidebar;
