import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const BestPrice = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h4" gutterBottom>
          Get The{" "}
          <span style={{ fontWeight: "bold", color: "yellowgreen" }}>
            Best Price
          </span>
        </Typography>
      </Box>
    </Container>
  );
};

export default BestPrice;
