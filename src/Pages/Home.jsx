import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckIcon from "@mui/icons-material/Check";

const reviews = [
  {
    profileImg: "/profilePhoto1.png",
    name: "Cooper Botosh",
    review:
      "Switching to One Business Energy has been a game-changer for our household! The green energy options are not only environmentally friendly but also significantly lower our utility bills. Highly recommend!",
    date: "Apr 12, 2024",
  },
  {
    profileImg: "/profilePhoto2.png",
    name: "Angel Septimus",
    review:
      "We were looking for a way to reduce our carbon footprint, and One Business Energy delivered exactly what we needed. Their renewable energy plans are affordable and align perfectly with our company’s goals. It feels great to know we’re contributing to a cleaner environment.",
    date: "May 22, 2024",
  },
  {
    profileImg: "/profilePhoto3.png",
    name: "Charlie Press",
    review:
      "We switched to One Business Energy after struggling with hidden charges and poor service from our previous provider. The difference has been night and day! Their pricing is straightforward, and the service is incredibly reliable. No more surprises on our energy bills!",
    date: "Jun 02, 2023",
  },
];

function Home() {
  return (
    <>
      <Box sx={{ marginTop: "100px", backgroundColor: "#fafafa" }}>
        <Grid container size={{ xs: 12 }} alignItems="center">
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              height: "100%",
              padding: {
                lg: "0px 0px 0px 170px",
                md: "0px 50px 0px 50px",
                xs: "0px 10px 0px 10px",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: { md: "flex-start", xs: "center" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#10271D",
                fontSize: { lg: "75px", md: "55px", xs: "45px" },
              }}
            >
              Powering Your Business
            </Typography>
            <Typography
              sx={{
                mt: { md: 10, xs: 3 },
                mb: 1,
                color: "#5D5D5D",
              }}
            >
              Enter your postcode to get a quote
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Postcode"
              sx={{
                maxWidth: "400px",
                margin: { xs: "10px 10px 0px 10px", md: "0px" },
              }}
            />
            <br />
            <Button
              variant="contained"
              sx={{
                width: "210px",
                margin: { xs: "20px 0px" },
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontSize: "18px",
                bgcolor: "var(--primaryDarkColor)",
                textTransform: "none",
              }}
            >
              Request a Quote
            </Button>
            {/* <ArrowDownwardIcon sx={{ fontSize: "62px" }} /> */}
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <Box
              component="img"
              src="/HomeWoman.png"
              alt="Business Woman"
              sx={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xs: 12 }}
          sx={{ margin: "6rem 8rem 6rem 8rem", padding: "0rem 5rem" }}
        >
          <Grid
            item
            size={{ lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={"/HomeBulbImg.png"}
              sx={{
                width: "100%",
                maxWidth: "420px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "0px", sm: "0px", md: "0px" },
                right: { xs: "10px", sm: "20px", md: "30px" },
                width: { xs: "70%", sm: "60%", md: "150px" },
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: "10px",
                display: "flex",
                padding: "35px 30px",
                textAlign: "left",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "14px", sm: "18px", md: "22px" },
                  lineHeight: { xs: "18px", sm: "22px", md: "28px" },
                }}
              >
                Excellence, Durability, and Trust
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            size={{ lg: 6 }}
            sx={{
              px: { xs: 2, sm: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              paddingTop: "7.5%",
            }}
          >
            <Box sx={{ marginBottom: "1rem" }}>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "11px", sm: "12px", md: "13px" },
                  lineHeight: "18px",
                  letterSpacing: "1.56px",
                  textTransform: "uppercase",
                }}
              >
                FEATURES
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "35px", sm: "45px", md: "57px" },
                  lineHeight: { xs: "42px", sm: "50px", md: "62px" },
                  letterSpacing: "-1.71px",
                }}
              >
                <span style={{ color: "var(--primaryDarkColor)" }}>Energy</span>{" "}
                Tailored for You
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  mb: { xs: "8px", md: "10px" },
                  // fontFamily: "BR Sonama",
                  fontWeight: "400",
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                  lineHeight: { xs: "24px", sm: "26px", md: "28px" },
                  color: "#54655E",
                }}
              >
                Comprehensive Energy Solutions: Affordable Plans and Smart
                Management for Homes, Businesses, and Industries
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                • Affordable Energy Plans
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                • Energy Sources
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                • Smart Energy Management
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            padding: { lg: "50px 200px", md: "30px 100px", xs: "20px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "13px",
                color: "#10271D",
              }}
            >
              why choose us
            </Typography>
            <Typography
              sx={{ fontSize: "55px", color: "var(--primaryDarkColor)" }}
            >
              Benefits
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "60%" },
              justifyContent: { xs: "center", md: "space-between" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                width: { xs: "100%", md: "70%" },
                fontSize: "17px",
                color: "#1C1C1C",
                textAlign: "left",
              }}
            >
              Reduced carbon emissions equivalent to removing thousands of cars
              off the road annually.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                mt: { xs: 2, md: 0 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              View More
              <ArrowForwardIcon sx={{ fontSize: "30px" }} />
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginBottom: "100px" }}
        >
          {[
            { img: "/HomeVector1.png", text: "Affordable Energy Solutions" },
            {
              img: "/HomeVector2.png",
              text: "Commitment to Responsible Practices",
            },
            { img: "/HomeVector3.png", text: "Customer-Centric Approach" },
            { img: "/HomeVector4.png", text: "Energy Innovation" },
          ].map((item, index) => (
            <Grid
              key={index}
              xs={12}
              md={2}
              sx={{
                width: "200px",
                backgroundColor: "#FFFFFF",
                borderRadius: "15px",
                padding: "35px 35px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "200px",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={item.img}
                sx={{ width: "45px", height: "55px", marginBottom: "10px" }}
              />
              <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Typography>{item.text}</Typography>
              </Box>
              <MoreHorizIcon sx={{ color: "#10271D33" }} />
            </Grid>
          ))}
        </Grid>
        <Grid container size={{ xs: 12 }} sx={{ height: "600px" }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "#FFECEC",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/WomanSmiling.png"
                sx={{
                  height: "85%",
                  width: "40%",
                }}
              />
              <Box
                component="img"
                src="/TeamworkHighfiveOffice.png"
                sx={{
                  height: "60%",
                }}
              />
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ padding: "80px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#10271D",
                textTransform: "uppercase",
                marginBottom: "15px",
              }}
            >
              Redefining Energy Solutions
            </Typography>
            <Typography
              sx={{
                fontSize: "57px",
                lineHeight: "70px",
                marginBottom: "30px",
              }}
            >
              <span style={{ color: "var(--primaryDarkColor)" }}>
                Affordable, Innovative
              </span>
              <span> </span>
              Solutions
            </Typography>
            <Typography
              sx={{ fontSize: "17px", color: "#54655E", marginBottom: "20px" }}
            >
              We provide reliable, affordable power that helps homes and
              businesses reduce their carbon footprint without sacrificing
              quality.
            </Typography>
            <Typography component="div">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckIcon sx={{ color: "var(--primaryDarkColor)" }} />
                Renewable Focus
              </Box>
            </Typography>
            <Typography component="div" sx={{ marginTop: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckIcon sx={{ color: "var(--primaryDarkColor)" }} />
                Competitive Pricing
              </Box>
            </Typography>
            <Button
              sx={{
                fontSize: "14px",
                backgroundColor: "var(--primaryDarkColor)",
                color: "white",
                textTransform: "none",
                height: "55px",
                width: "150px",
                borderRadius: "30px",
                marginTop: "20px",
              }}
            >
              About Us
            </Button>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            padding: { lg: "50px 200px", md: "30px 100px", xs: "20px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "13px",
                color: "#10271D",
              }}
            >
              portfolio
            </Typography>
            <Typography
              sx={{ fontSize: "55px", color: "var(--primaryDarkColor)" }}
            >
              Our Projects
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "60%" },
              justifyContent: { xs: "center", md: "space-between" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                width: { xs: "100%", md: "80%" },
                fontSize: "17px",
                color: "#1C1C1C",
                textAlign: "left",
              }}
            >
              One Business Energy provides innovative and customer-centric
              energy solutions, tailored for efficient power management.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                mt: { xs: 2, md: 0 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              View More
              <ArrowForwardIcon sx={{ fontSize: "30px" }} />
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ paddingBottom: "130px" }}>
          <Typography
            sx={{
              fontSize: "57px",
              color: "var(--primaryDarkColor)",
              margin: "40px 0px",
              textAlign: "center",
            }}
          >
            Testimonials
          </Typography>
          <Grid container spacing={5} justifyContent="center" size={{ xs: 12 }}>
            {reviews.map((item, index) => (
              <Grid
                item
                size={{ xs: 12, md: 3 }}
                key={index}
                sx={{ height: "400px" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    padding: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    textAlign: "left",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="img"
                      src={item.profileImg}
                      sx={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        margin: "0px 10px 10px 0px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "24px",
                        color: "var(--primaryDarkColor)",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#494949",
                      marginY: "10px",
                      textAlign: "left",
                      fontSize: "17px",
                    }}
                  >
                    "{item.review}"
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#FFA2A2",
                      marginTop: "auto",
                      marginLeft: "auto",
                    }}
                  >
                    {item.date}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            padding: "50px 200px",
            justifyContent: "space-between",
            bgcolor: "white",
          }}
        >
          <Typography sx={{ fontSize: "25px" }}>
            Power Your Home or Business with
            <span
              style={{
                color: "var(--primaryDarkColor)",
                textDecoration: "underline",
              }}
            >
              One Business Energy
            </span>
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: { lg: "180px", xs: "150px" },
              height: "40px",
              color: "black",
              border: "solid black 2px",
              borderRadius: "50px",
              textTransform: "none",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
