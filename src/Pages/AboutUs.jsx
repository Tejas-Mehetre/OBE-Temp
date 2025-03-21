import React from "react";
import { Container, Typography, Box, Link, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import NavigationIcon from "@mui/icons-material/Navigation";

import EastIcon from "@mui/icons-material/East";

const AboutUs = () => {
  return (
    <>
      <Box sx={{ overflow: "hidden", height: { xs: "350px", md: "445px" } }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "400px", md: "640px" },
            backgroundImage: "url('/AboutHead 1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(30, 30, 30, 0.9), rgba(42, 42, 43, 0))",
            }}
          />

          <Box
            sx={{
              position: "relative",
              height: "100%",
              padding: {
                xs: "8rem 7rem",
                md: "3.125rem 0rem 18.75rem 11.25rem",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
              whiteSpace: "nowrap",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                display: { xs: "block", md: "inline-block" },
                whiteSpace: "nowrap",

                zIndex: 1,
              }}
            >
              About Us
            </Typography>

            <Box
              sx={{
                position: "relative",
                width: "9rem",
                height: "3px",
                backgroundColor: "red",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Grid
        size={{ xs: 12 }}
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          paddingTop: { xs: "5%", md: "5%" },
        }}
      >
        <Grid
          item
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" width={{ xs: "100%", md: "50%" }}>
            Our Green{" "}
            <span style={{ color: "var(--primaryDarkColor)" }}>Power</span>{" "}
            Services!
          </Typography>
        </Grid>

        <Grid item size={{ xs: 12, md: 7 }}>
          <Typography
            variant="body1"
            sx={{
              color: "gray",
              marginRight: { xs: "0%", md: "20%" },
              textAlign: { xs: "center", md: "left" },
              marginTop: { xs: "5%", md: "0" },
              padding: { xs: "0px 20px" },
              fontSize: "17px",
              width: "59%",
            }}
          >
            One Business Energy is committed to empowering businesses to achieve
            carbon neutrality and energy efficiency. Recognizing the vital role
            businesses play in shaping a responsible future. <br></br>
            We offer renewable energy solutions, comprehensive energy audits,
            and strategic guidance. Our goal is to help businesses minimize
            their carbon footprint while maximizing cost savings and operational
            efficiency.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          mt: 12,
          columnGap: { xs: 3, md: 18 },
          paddingRight: { xs: "0%", md: "10%" },
          Right: { xs: "0" },
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: "flex-start",
              gap: 2,

              height: "200px",
            }}
          >
            <Box
              sx={{
                width: "60px",
                height: "60px",
                backgroundImage: `url(/Vector1.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                paddingTop: "20px",
                whiteSpace: "normal",
                lineHeight: 1.3,
                textAlign: "left",
                display: "block",
                maxWidth: "150px",
              }}
            >
              Renewable Energy Source
            </Typography>
            <EastIcon
              sx={{ color: "red", fontSize: "large", marginTop: "23px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: "flex-start",
              gap: 2,
              height: "200px",
            }}
          >
            <Box
              sx={{
                width: "60px",
                height: "60px",
                backgroundImage: `url(/Vector2.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                paddingTop: "20px",
                whiteSpace: "normal",
                lineHeight: 1.3,
                textAlign: "left",
                display: "block",
                maxWidth: "150px",
              }}
            >
              Energy Efficiency Audits
            </Typography>
            <EastIcon
              sx={{ color: "red", fontSize: "large", marginTop: "23px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              height: "200px",
              right: "10px",
            }}
          >
            <Box
              sx={{
                width: "60px",
                height: "60px",
                backgroundImage: `url(/Vector3.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                paddingTop: "20px",
                whiteSpace: "normal",
                lineHeight: 1.3,
                textAlign: "left",
                display: "block",
                maxWidth: "150px",
              }}
            >
              Energy Solutions for Businesses
            </Typography>
            <EastIcon
              sx={{ color: "red", fontSize: "large", marginTop: "23px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              height: "200px",
            }}
          >
            <Box
              sx={{
                width: "60px",
                height: "60px",
                backgroundImage: `url(/Vector4.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                paddingTop: "20px",
                whiteSpace: "normal",
                lineHeight: 1.3,
                textAlign: "left",
                display: "block",
                maxWidth: "100px",
              }}
            >
              Customer Portal
            </Typography>
            <EastIcon
              sx={{ color: "red", fontSize: "large", marginTop: "23px" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          backgroundColor: "rgba(255, 236, 236, 1)",
          paddingTop: "10px",
          marginTop: "60px",
        }}
      >
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
              src={"/AboutSecond 2.jpg"}
              sx={{
                width: "100%",
                maxWidth: "460px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "0px", sm: "0px", md: "40px" },
                right: { xs: "10px", sm: "20px", md: "20px" },
                width: { xs: "70%", sm: "60%", md: "150px" },
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: "10px",
                display: "flex",
                padding: "40px 35px",
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
                Performance, Quality and Reliability
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }} sx={{ paddingTop: "8.5%" }}>
            <Typography
              variant="body2"
              sx={{
                textTransform: "uppercase",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Our Values
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: "bold",
                color: "#ff3d47",
                mt: 1,
              }}
            >
              Affordability and Innovation
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#333",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              For a Better Future
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: "var(--primaryDarkColor)",
                    fontWeight: "bold",
                    marginRight: "8px",
                    marginBottom: "3.8%",
                  }}
                >
                  <NavigationIcon
                    sx={{ transform: "rotate(90deg)", fontSize: "medium" }}
                  />
                </span>

                <Typography
                  style={{
                    fontWeight: "normal",
                    color: "#666",
                    marginLeft: "5px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    Integrity and Responsibility:
                  </span>
                  We promote responsible practices while building trust through
                  transparency and reliable communication.
                </Typography>
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <span
                  style={{
                    color: "var(--primaryDarkColor)",
                    fontWeight: "bold",
                    marginRight: "8px",
                    marginBottom: "3.8%",
                  }}
                >
                  <NavigationIcon
                    sx={{ transform: "rotate(90deg)", fontSize: "medium" }}
                  />
                </span>

                <Typography
                  style={{
                    fontWeight: "normal",
                    color: "#666",
                    marginLeft: "5px",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Innovation and Collaboration:
                  </span>
                  We embrace new technologies and partner with clients to create
                  effective energy solutions.
                </Typography>
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <span
                  style={{
                    color: "var(--primaryDarkColor)",
                    fontWeight: "bold",
                    marginRight: "8px",
                    marginBottom: "3.8%",
                  }}
                >
                  <NavigationIcon
                    sx={{ transform: "rotate(90deg)", fontSize: "medium" }}
                  />
                </span>

                <Typography
                  style={{
                    fontWeight: "normal",
                    color: "#666",
                    marginLeft: "5px",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Excellence:
                  </span>
                  We are committed to delivering high-quality services and
                  exceeding client expectations.
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Grid container size={{ xs: 12 }} justifyContent={"center"}>
            <Box
              component="img"
              src="AboutWater 1.png"
              sx={{ width: "30%", height: "20%", marginLeft: "150px" }}
            ></Box>
            <Box
              component="img"
              src="AboutEnergy 1.png"
              sx={{ width: "30%", height: "25%", marginLeft: "150px" }}
            ></Box>
            <Box
              component="img"
              src="AboutIcon 1.png"
              sx={{ marginLeft: "auto" }}
            />
          </Grid>
        </Box>
      </Box>

      <Grid
        size={{ xs: 12 }}
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          padding: { xs: "5%", md: "7% 0%" },
          gap: { xs: 1, md: 10 },
        }}
      >
        <Grid item size={{ xs: 12, md: 4 }}>
          <Typography variant="h4">
            Our{" "}
            <span style={{ color: "var(--primaryDarkColor)" }}>Milestone</span>{" "}
          </Typography>
          <Typography>
            Initiatives to bring green energy to underserved communities
          </Typography>
        </Grid>

        <Grid item size={{ xs: 12, md: 5 }}>
          <Typography
            variant="body1"
            sx={{
              color: "gray",
              marginRight: { xs: "0%", md: "20%" },
              textAlign: { xs: "center", md: "left" },
              marginTop: { xs: "5%", md: "0" },
              padding: { xs: "0px 20px" },
              width: "506px",
            }}
          >
            One Business Energy is an independent business energy supplier that
            offers companies of all sizes straightforward, equitable, and
            transparent pricing and invoicing services.
            <Typography
              variant="body1"
              sx={{ color: "gray", lineHeight: 1.6, marginTop: "10px" }}
            >
              Yes, we’re new in town and plan to take the market by storm! One
              Business Water, alongside our sister company One Business Energy,
              are part of the{" "}
              <Link
                href="#"
                sx={{
                  color: "red",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textDecorationColor: "red",
                  textUnderlineOffset: "2px",
                }}
              >
                Net Zero Planet Group
              </Link>
              . One Business Energy provides power and gas to business customers
              throughout the UK, and you can find out more{" "}
              <Link
                href="#"
                sx={{
                  color: "red",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textDecorationColor: "red",
                  textUnderlineOffset: "2px",
                }}
              >
                here
              </Link>
              .
            </Typography>
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          position: "relative",
          height: "627px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: { xs: "30px 20px", md: "0px 20px" },
          overflow: "hidden",
        }}
      >
        <img
          src="/AboutHead 1.jpg"
          alt="About Us"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Join One Business Energy
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "750px", marginTop: 2 }}>
            Partner with One Business Energy to embrace energy solutions.iscover
            our services, read success stories, and access resources on our
            website. Our expert team is ready to help you achieve cleaner, more
            efficient energy practices.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginTop: 10,
            backgroundColor: "var(--warningColor)",
            color: "white",
            padding: "8px 50px",
            fontSize: "16px",
            borderRadius: "20px",
            textTransform: "none",
            zIndex: 1,
          }}
        >
          Join Us
        </Button>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{ width: "100%", padding: "50px 0px" }}
      >
        <Typography variant="h5" sx={{ fontWeight: "500" }}>
          Power Your Home or Business with{" "}
          <Box
            component="span"
            sx={{
              color: "var(--primaryDarkColor)",
              position: "relative",
              display: "inline-block",
              textDecoration: "underline",
            }}
          >
            Green Energy
            {/* <Box
              sx={{
                position: "absolute",
                bottom: "-3px",
                left: 0,
                width: "100%",
                height: "4px",
                backgroundColor: "var(--primaryDarkColor)",
                transform: "skewX(-20deg)",
              }}
            /> */}
          </Box>
        </Typography>

        <Button
          variant="outlined"
          sx={{
            borderColor: "var(--primaryDarkColor)",
            color: "var(--primaryDarkColor)",
            borderRadius: "30px",
            padding: "5px 20px",
            textTransform: "none",
          }}
        >
          Learn More
        </Button>
      </Box>
    </>
  );
};

export default AboutUs;
