import React from 'react'
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Home() {
  return (
    <>
      <Box sx={{ marginTop: "100px", width: "100%", height: "100vh" }}>
        <Grid container size={{ xs: 12 }} alignItems="center" sx={{ height: { xs: "auto", md: "700px" } }}>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ height: "100%", padding: "150px 0px 0px 170px" }}>
            <Typography variant="h2" sx={{ color: "#10271D", fontSize: { lg: "75px", md: "55px" } }}>
              Powering Your Business
            </Typography>
            <Typography sx={{ mt: 12, color: "#5D5D5D" }}>
              Enter your postcode to get a quote
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Postcode"
              sx={{ mt: 2, maxWidth: "400px" }}
            />
            <Button
              variant="contained"
              sx={{ mt: 3, px: 4, py: 1.5, borderRadius: "30px", fontWeight: "bold", bgcolor: "var(--primaryDarkColor)" }}
            >
              Request a Quote
            </Button><br />
            {/* <ArrowDownwardIcon sx={{ fontSize: "62px" }} /> */}
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <Box
              component="img"
              src="/HomeWoman.png"
              alt="Business Woman"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid size={{ xs: 12, md: 7 }}>

          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
