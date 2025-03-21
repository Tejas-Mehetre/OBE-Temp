import { Box, Button, Typography } from "@mui/material";
import Vector1 from "../../public/Vector1.png";
import Vector2 from "../../public/Vector2.png";
import Vector3 from "../../public/Vector3.png";
import Vector4 from "../../public/Vector4.png";
import InfoIcon from "../../public/InfoIcon.png";
import ServicesManWomen from "../../public/ServicesManWomen.jpg";
import ServicesProfilePhoto from "../../public/ServicesProfilePhoto.jpg";
import ServicesBox3 from "../../public/ServicesBox3.jpg";
import Grid from "@mui/material/Grid2";
import React from "react";

const Services = () => {
  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "400px", sm: "450px", md: "500px", lg: "555px" },
            overflow: "hidden",
            background:
              "linear-gradient(to right, rgba(30, 30, 30, 0.9), rgba(42, 42, 43, 0))",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url(../../public/services_bg.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transform: "scaleX(-1)",
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
                fontFamily: "BR Sonoma",
                fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "56px" },
                fontWeight: "500",
                lineHeight: "1.2",
                color: "#F9F9F9",
                position: "relative",
                display: "inline-block",
              }}
            >
              Our Services
            </Typography>

            <Box
              sx={{
                width: { xs: "80%", sm: "100%", md: "120%" },
                height: "3px",
                backgroundColor: "var(--primaryDarkColor)",
                marginTop: "8px",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#FFECEC",
            padding: "8rem 10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={12} size={{ xs: 12 }}>
            <Grid item sx={{ width: "180px", height: "200px" }}>
              <Box
                component="img"
                src={Vector1}
                sx={{
                  marginBottom: "3.5rem",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "BR Sonoma",
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "28.78px",
                }}
              >
                Renewable <br /> Energy Source
              </Typography>
            </Grid>

            <Grid item sx={{ width: "180px", height: "200px" }}>
              <Box
                component="img"
                src={Vector2}
                sx={{
                  marginBottom: "3.5rem",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "BR Sonoma",
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "28.78px",
                }}
              >
                Energy Efficiency <br /> Audits
              </Typography>
            </Grid>

            <Grid item sx={{ width: "180px", height: "200px" }}>
              <Box
                component="img"
                src={Vector3}
                sx={{
                  marginBottom: "3rem",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "BR Sonoma",
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "28.78px",
                }}
              >
                Energy Solutions <br /> for Bussinesses
              </Typography>
            </Grid>

            <Grid item sx={{ width: "180px", height: "200px" }}>
              <Box
                component="img"
                src={Vector4}
                sx={{
                  marginBottom: "3rem",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "BR Sonoma",
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "28.78px",
                }}
              >
                Customer <br /> Portal
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ margin: "6rem 5rem 4rem 5rem" }}>
          <Grid container size={{ xs: 12 }}>
            <Grid item size={{ lg: 5 }} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
              <Box sx={{ marginBottom: "1rem" }}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: { xs: "11px", sm: "12px", md: "13px" }, // Responsive text size
                    lineHeight: "18px",
                    letterSpacing: "1.56px",
                    textTransform: "uppercase",
                  }}
                >
                  OVERVIEW
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "35px", sm: "45px", md: "57px" }, // Responsive heading
                    lineHeight: { xs: "42px", sm: "50px", md: "62px" },
                    letterSpacing: "-1.71px",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "var(--primaryDarkColor)",

                      fontWeight: "500",
                      fontSize: { xs: "35px", sm: "45px", md: "57px" }, // Match main heading size
                      lineHeight: { xs: "42px", sm: "50px", md: "62px" },
                      letterSpacing: "-1.71px",
                    }}
                  >
                    Your
                  </Typography>{" "}
                  Business Starts Here!
                </Typography>
              </Box>

              {/* Individual List Items without .map() */}
              <Box>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    mb: { xs: "8px", md: "10px" }, // Adjust margin spacing
                    fontFamily: "BR Sonama",
                    fontWeight: "400",
                    fontSize: { xs: "15px", sm: "16px", md: "17px" }, // Responsive font size
                    lineHeight: { xs: "24px", sm: "26px", md: "28px" },
                    color: "#54655E",
                  }}
                >
                  <Box
                    component="img"
                    src={InfoIcon}
                    sx={{ width: "12px", height: "17px", flexShrink: 0 }}
                  />
                  We help businesses transition to tailored engineering
                  solutions, including solar panels and wind turbines.
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    mb: { xs: "8px", md: "10px" },
                    fontFamily: "BR Sonama",
                    fontWeight: "400",
                    fontSize: { xs: "15px", sm: "16px", md: "17px" },
                    lineHeight: { xs: "24px", sm: "26px", md: "28px" },
                    color: "#54655E",
                  }}
                >
                  <Box
                    component="img"
                    src={InfoIcon}
                    sx={{ width: "12px", height: "17px", flexShrink: 0 }}
                  />
                  Our energy efficiency upgrades reduce consumption and costs.
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    mb: { xs: "8px", md: "10px" },
                    fontFamily: "BR Sonama",
                    fontWeight: "400",
                    fontSize: { xs: "15px", sm: "16px", md: "17px" },
                    lineHeight: { xs: "24px", sm: "26px", md: "28px" },
                    color: "#54655E",
                  }}
                >
                  <Box
                    component="img"
                    src={InfoIcon}
                    sx={{ width: "12px", height: "17px", flexShrink: 0 }}
                  />
                  We conduct energy audits to identify inefficiencies and
                  provide optimization insights.
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    mb: { xs: "8px", md: "10px" },
                    fontFamily: "BR Sonama",
                    fontWeight: "400",
                    fontSize: { xs: "15px", sm: "16px", md: "17px" },
                    lineHeight: { xs: "24px", sm: "26px", md: "28px" },
                    color: "#54655E",
                  }}
                >
                  <Box
                    component="img"
                    src={InfoIcon}
                    sx={{ width: "12px", height: "17px", flexShrink: 0 }}
                  />
                  Our monitoring services offer real-time data on energy usage
                  for informed decision-making.
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              size={{ lg: 7 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }, // Center on mobile, left on desktop
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Image Box */}
              <Box
                sx={{
                  width: { xs: "250px", sm: "280px", md: "300px" }, // Responsive width
                  height: { xs: "350px", sm: "380px", md: "400px" }, // Responsive height
                  overflow: "hidden",
                  position: "relative",
                  left: { xs: "0px", md: "400px" }, // Adjust for mobile and desktop
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={ServicesManWomen}
                  sx={{
                    width: "140%",
                    height: "70%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-70%, -50%) scale(1.6)", // Center & zoom
                  }}
                />
              </Box>

              {/* Typo Box - Ensuring Visibility & Positioning */}
              <Box
                sx={{
                  width: { xs: "230px", sm: "250px", md: "250px" }, // Responsive width
                  height: { xs: "100px", sm: "110px", md: "120px" }, // Responsive height
                  backgroundColor: "#1c1c1c",
                  color: "white",
                  borderRadius: "10px",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: "10px 0px",
                  textAlign: "left",
                  bottom: { xs: "-30px", sm: "-20px", md: "-2px" }, // Keep it in view
                  left: { xs: "0%", sm: "10%", md: "250px" }, // Keep it near the image but visible
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: { xs: "18px", sm: "24px", md: "28px" }, // Responsive font size
                    lineHeight: { xs: "22px", sm: "28px", md: "32px" },
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  Efficiency, <br /> Superior Quality & <br /> Dependability
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            height: { xs: "400px", sm: "560px" },
            width: "100%",
            position: "relative",
            backgroundImage: "url(/ServicesGroup.jpg)",
            backgroundPosition: { xs: "center", sm: "center top -40px" },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: -1,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(30, 30, 30, 0.9), rgba(42, 42, 43, 0))",
              zIndex: 0,
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: { xs: "2rem", sm: "4rem" },
              gap: { xs: "1rem", sm: "1.3rem" },
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                color: "#FAFCFA",
                fontFamily: "BR Sonama",
                fontWeight: "700",
                fontSize: { xs: "12px", sm: "14px" },
                lineHeight: "18px",
                letterSpacing: "1.56px",
                textTransform: "uppercase",
              }}
            >
              where to start
            </Typography>
            <Typography
              sx={{
                color: "#FAFCFA",
                fontFamily: "BR Sonama",
                fontWeight: "700",
                fontSize: { xs: "36px", sm: "57px" },
                lineHeight: { xs: "40px", sm: "62px" },
                letterSpacing: "-1.71px",
                textAlign: "center",
              }}
            >
              Find a Partner for <br /> Your Project
            </Typography>
            <Button
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#FF4646",
                border: "1px solid #c1c1c1",
                borderRadius: "100px",
                width: { xs: "160px", sm: "201px" },
                height: { xs: "48px", sm: "56px" },
                fontFamily: "BR Sonama",
                fontWeight: "700",
                fontSize: { xs: "16px", sm: "18px" },
                lineHeight: "48px",
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>

        <Box sx={{ margin: "3rem 14rem 3rem 12rem" }}>
          <Grid container spacing={5}>
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontFamily: "BR Sonama",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "18px",
                  letterSpacing: "1.56px",
                  textTransform: "uppercase",
                }}
              >
                Modern Technologies
              </Typography>

              <Typography
                sx={{
                  color: "#000000",
                  fontFamily: "BR Sonama",
                  fontWeight: "700",
                  fontSize: "57px",
                  lineHeight: "62px",
                  letterSpacing: "-1.71px",
                }}
              >
                Energy{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "var(--primaryDarkColor)",
                    fontFamily: "BR Sonama",
                    fontWeight: "700",
                    fontSize: "57px",
                    lineHeight: "62px",
                    letterSpacing: "-1.71px",
                  }}
                >
                  Solutions
                </Typography>{" "}
                for <br /> Businesses
              </Typography>

              <Typography
                sx={{
                  color: "#54655E",
                  fontFamily: "BR Sonama",
                  fontWeight: "400",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                At One Business Energy, we provide innovative and reliable
                energy solutions tailored to meet the unique needs of
                businesses. Our services are designed to simplify energy
                management, reduce costs, and support your journey toward a
                greener future.
              </Typography>

              <Box sx={{ display: "flex", gap: "2rem" }}>
                <Box
                  component="img"
                  src={ServicesProfilePhoto}
                  sx={{ width: "78px", height: "78px", borderRadius: "50px" }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Typography
                    sx={{
                      color: "var(--primaryDarkColor)",
                      fontFamily: "BR Sonama",
                      fontWeight: "500",
                      fontSize: "24px",
                      lineHeight: "34px",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    Piter Bowman
                  </Typography>
                  <Typography
                    sx={{
                      color: "#54655E",
                      fontFamily: "BR Sonama",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "18px",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    Engineer
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, lg: 5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                marginTop: "-5rem",
              }}
            >
              <Typography
                sx={{
                  color: "#54655E",
                  fontFamily: "BR Sonama",
                  fontWeight: "400",
                  fontSize: "17px",
                  lineHeight: "28px",
                  letterSpacing: "-0.72px",
                }}
              >
                We provide flexible and customizable energy plans designed to
                meet the needs of businesses of all sizes. Our fixed-rate
                contracts offer protection against market fluctuations, ensuring
                budget stability and predictability.
              </Typography>
              <Typography
                sx={{
                  color: "#54655E",
                  fontFamily: "BR Sonama",
                  fontWeight: "400",
                  fontSize: "17px",
                  lineHeight: "28px",
                  letterSpacing: "-0.72px",
                }}
              >
                Additionally, we provide sector-specific advice to help
                businesses optimize energy usage and reduce expenses. Our
                scalable solutions are tailored to grow alongside your business,
                adapting to your evolving energy requirements seamlessly
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ margin: "5rem 14rem 5rem 12rem" }}>
          <Grid containern size={{ xs: 12 }} display={"flex"} gap={6}>
            <Grid item size={{ lg: 3 }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  position: "absolute",
                  marginTop: "2.5rem",
                  marginLeft: "1.5rem",
                  fontWeight: "400",
                  fontSize: "28.5px",
                  lineHeight: "28px",
                }}
              >
                01.
              </Typography>
              <Box
                component="img"
                src={ServicesBox3}
                sx={{ width: "350px", height: "400px", borderRadius: "14px" }}
              ></Box>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  position: "absolute",
                  marginTop: "-8rem",
                  marginLeft: "1.5rem",
                  fontWeight: "700",
                  fontSize: "28.5px",
                  lineHeight: "34px",
                }}
              >
                Flexible Energy <br /> Contract
              </Typography>
            </Grid>

            <Grid item size={{ lg: 3 }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  position: "absolute",
                  marginTop: "2.5rem",
                  marginLeft: "1.5rem",
                  fontWeight: "400",
                  fontSize: "28.5px",
                  lineHeight: "28px",
                }}
              >
                02.
              </Typography>
              <Box
                component="img"
                src={ServicesBox3}
                sx={{ width: "350px", height: "400px", borderRadius: "14px" }}
              ></Box>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  position: "absolute",
                  marginTop: "-7rem",
                  marginLeft: "1.5rem",
                  fontWeight: "700",
                  fontSize: "28.5px",
                  lineHeight: "34px",
                }}
              >
                Tailored Tariff's
              </Typography>
            </Grid>

            <Grid item size={{ lg: 3 }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  position: "absolute",
                  marginTop: "2.5rem",
                  marginLeft: "1.5rem",
                  fontWeight: "400",
                  fontSize: "28.5px",
                  lineHeight: "28px",
                }}
              >
                03.
              </Typography>
              <Box
                component="img"
                src={ServicesBox3}
                sx={{ width: "350px", height: "400px", borderRadius: "14px" }}
              ></Box>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  position: "absolute",
                  marginTop: "-7rem",
                  marginLeft: "1.5rem",
                  fontWeight: "700",
                  fontSize: "25.5px",
                  lineHeight: "34px",
                }}
              >
                Energy Consultancy
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Services;
