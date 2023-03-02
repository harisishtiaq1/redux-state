import { Drawer, Link, Box, List, ListItem } from "@mui/material";
import React from "react";

function Sidebar() {
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
