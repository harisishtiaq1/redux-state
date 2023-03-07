import React from "react";
import { Typography, Box, Stack, Container } from "@mui/material";
function Main() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth={354} sx={{ mr: 5 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Redux Toolkit
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
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
    </Box>
  );
}

export default Main;
