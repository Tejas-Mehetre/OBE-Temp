import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SendIcon from "@mui/icons-material/Send";
import NavigationIcon from "@mui/icons-material/Navigation";

function RequestAQuote() {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "400px", sm: "450px", md: "500px", lg: "555px" },
          overflow: "hidden",
          background:
            "linear-gradient(to right, rgba(30, 30, 30, 0.9), rgba(42, 42, 43, 0))",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/RequestAQuoteBg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "5%", sm: "8%", md: "10%" },
            transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              // fontFamily: "BR Sonoma",
              fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "56px" },
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#F9F9F9",
              position: "relative",
              display: "inline-block",
            }}
          >
            Request a Quote
          </Typography>
          <Box
            sx={{
              width: { xs: "80%", sm: "90%", md: "100%" },
              height: "3px",
              backgroundColor: "var(--primaryDarkColor)",
              marginTop: "8px",
            }}
          />
        </Box>
      </Box>
      <Grid container sx={{ margin: "5rem 10rem" }} spacing={15}>
        <Grid
          item
          size={{ lg: 6 }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            sx={{
              color: "#10271D",
              fontWeight: "500",
              fontSize: "13px",
              lineHeight: "18px",
              letterSpacing: "1.56pxs",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Request a quote
          </Typography>
          <Typography
            sx={{
              color: "#10271D",
              fontWeight: "400",
              fontSize: "30px",
            }}
          >
            Empower Your Future – Get Your Energy{" "}
            <span style={{ color: "var(--primaryDarkColor)" }}>Quote</span>{" "}
            Today!"
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              marginTop: "30px",
            }}
          >
            <Typography
              sx={{
                color: "#54655E",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <NavigationIcon
                sx={{
                  color: "var(--primaryDarkColor)",
                  transform: "rotate(90deg)",
                  fontSize: "20px",
                }}
              />
              Specify your needs first.
            </Typography>

            <Typography
              sx={{
                color: "#54655E",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <NavigationIcon
                sx={{
                  color: "var(--primaryDarkColor)",
                  transform: "rotate(90deg)",
                  fontSize: "20px",
                }}
              />
              Enter your personal details and contact information.
            </Typography>
            <Typography
              sx={{
                color: "#54655E",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <NavigationIcon
                sx={{
                  color: "var(--primaryDarkColor)",
                  transform: "rotate(90deg)",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              />
              After submitting the details, our team will, Analyze your energy
              needs based on the provided data.
            </Typography>
            <Typography
              sx={{
                color: "#54655E",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <NavigationIcon
                sx={{
                  color: "var(--primaryDarkColor)",
                  transform: "rotate(90deg)",
                  fontSize: "20px",
                }}
              />
              We will offer the best energy solutions tailored to your
              requirements.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          size={{ lg: 5 }}
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            fullWidth
            label="Firstly, please let us know what you’re looking for?*"
            variant="standard"
          />

          <TextField fullWidth label="First name*" variant="standard" />

          <TextField fullWidth label="Last name*" variant="standard" />

          <TextField fullWidth label="Phone number*" variant="standard" />

          <TextField fullWidth label="Street address*" variant="standard" />

          <Button
            variant="contained"
            startIcon={
              <SendIcon
                sx={{
                  transform: "rotate(320deg)",
                }}
              />
            }
            sx={{
              marginTop: "1rem",
              width: "200px",
              height: "55px",
              backgroundColor: "var(--primaryDarkColor)",
              // fontWeight: "700",
              textTransform: "none",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#FFFFFF",
              borderRadius: "50px",
            }}
          >
            Request a Quote
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RequestAQuote;
