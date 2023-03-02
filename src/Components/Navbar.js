import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
function Navbar() {
  return (
    <AppBar 
    position="fixed"
        // sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:"" }}
        >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Redux Work
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
