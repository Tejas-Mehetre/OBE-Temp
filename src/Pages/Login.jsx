import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import LoginBg from "/LoginBg.jpg";

function Login() {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Grid container sx={{ margin: "3rem 3rem", padding: "3rem" }}>
        <Grid item size={{ lg: 7 }}>
          <Box
            component="img"
            src={LoginBg}
            sx={{ width: "700px", height: "400px", borderRadius: "8px" }}
          />
        </Grid>
        <Grid
          item
          size={{ lg: 5 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              padding: "1rem 1.5rem",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              gap: "2rem",
              border: "1px solid  grey",
              width: "569px",
              height: "319px",
            }}
          >
            <Typography
              sx={{
                // fontFamily: "BR Sonoma",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "100%",
              }}
            >
              Welcome!
            </Typography>
            <Typography
              sx={{
                // fontFamily: "BR Sonoma",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              Whether you're a broker or a customer, our portal gives you full
              control over your energy plans, billing, and insights.
            </Typography>
            <Typography
              sx={{
                // fontFamily: "BR Sonoma",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              Login below your portal below and take charge of your energy
              journey.
            </Typography>

            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                sx={{
                  height: "41px",
                  width: "233px",
                  padding: "10px",
                  borderRadius: "500px",
                  gap: "10px",
                  backgroundColor: "var(--primaryDarkColor)",
                  color: "#FFFFFF",
                  // fontFamily: "BR Sonoma",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                Login to Customer Portal
              </Button>
              <Button
                sx={{
                  height: "41px",
                  width: "233px",
                  padding: "10px",
                  borderRadius: "500px",
                  gap: "10px",
                  color: "#1c1c1c",
                  border: "1px solid",
                  // fontFamily: "BR Sonoma",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                Login to Admin Portal
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
