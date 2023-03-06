import { NavLink } from "react-router-dom";

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
      <ListItem>
        <ListItemButton component='NavLink' to='/'
        sx={{
            '.&active':{
                backgroundColor:'red'
            }
        }}>
        <HomeIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
        Home
        </ListItemButton>
      </ListItem>

      <StyledLink to="/posts" sx={{ cursor: "pointer" }} style={navLinkStyles}>
        <StyledListItem
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
        >
          <CommentIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
          Comments
        </StyledListItem>
      </StyledLink>
      <StyledLink to="/albums" sx={{ cursor: "pointer" }} style={navLinkStyles}>
        <StyledListItem
          path="/albums"
          activeLink={activeLink}
          onClick={() => handleActiveLink("/albums")}
        >
          <PhotoLibraryIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
          Albums
        </StyledListItem>
      </StyledLink>
      <StyledLink to="/todos" sx={{ cursor: "pointer" }} style={navLinkStyles}>
        <StyledListItem
          path="/todos"
          activeLink={activeLink}
          onClick={() => handleActiveLink("/todos")}
        >
          <ListIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
          Todos
        </StyledListItem>
      </StyledLink>
      <StyledLink to="/users" sx={{ cursor: "pointer" }} style={navLinkStyles}>
        <StyledListItem
          path="/users"
          activeLink={activeLink}
          onClick={() => handleActiveLink("/users")}
        >
          <PersonIcon sx={{ color: "white", mr: 2, mb: 0.5 }} />
          Users
        </StyledListItem>
      </StyledLink>
    </List>
  </Box>
</Drawer>;
