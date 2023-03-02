import React from "react";
import { AppBar,Toolbar,Typography } from "@mui/material";
function Navbar() {
  return (
    <AppBar position="relative" sx={{backgroundColor:'blueViolet'}}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Redux Work
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
