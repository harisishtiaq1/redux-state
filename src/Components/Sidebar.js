import { Drawer, Link,IconButton,Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";

function Sidebar() {
    const [isDrawerOpen,setIsDrawerOpen]= useState(false)
  return (
    <>
    <IconButton size="large"  edge='start' color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}   >
        <MenuIcon/>
    </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
      <Box p={2} width="250px" textAlign="center" role="presentation">
        <Link>Home</Link>
        <Link>Posts</Link>
        <Link>Comments</Link>
        <Link>Albums</Link>
        <Link>Todos</Link>
        <Link>Users</Link>
      </Box>
    </Drawer>
    </>
  );
}

export default Sidebar;
