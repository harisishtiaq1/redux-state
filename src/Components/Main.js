import React from "react";
import { Grid, Typography, Box, Stack, Container } from "@mui/material";
function Main() {
  return (
    <Box sx={{ ml: 35 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{ ml: 10 }}
              >
                Redux Toolkit
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                width={345}
                paragraph
              >
                We can't solve every use case, but in the spirit of
                create-react-app, we can try to provide some tools that abstract
                over the setup process and handle the most common use cases.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              ></Stack>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
