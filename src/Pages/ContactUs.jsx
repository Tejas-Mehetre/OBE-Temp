import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ContactBg from "../../public/ContactBg.jpg";
import SendIcon from "@mui/icons-material/Send";
import {
  AccountCircle,
  Edit,
  Email,
  EmailOutlined,
  Info,
  InfoOutlined,
  Person,
  PersonOutline,
  Phone,
  PhoneOutlined,
} from "@mui/icons-material";

function ContactUs() {
  return (
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
            top: -700,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/ContactBg.jpg)",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            //transform: "scaleX(-1)",
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
            Contact Us
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

      <Box>
        <Grid container sx={{ margin: "5rem 10rem" }} spacing={15}>
          <Grid
            item
            size={{ lg: 6 }}
            sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <Typography
              sx={{
                color: "#10271D",
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "18px",
                letterSpacing: "1.56pxs",
                textTransform: "uppercase",
              }}
            >
              contact our experts
            </Typography>
            <Typography
              sx={{
                color: "#10271D",
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "3rem",
                letterSpacing: "-1.71pxpxs",
                textTransform: "uppercase",
              }}
            >
              "Power Up Your Life – <br />{" "}
              <Typography
                variant="span"
                sx={{
                  color: "var(--primaryDarkColor)",
                  fontWeight: "700",
                  fontSize: "30px",
                  lineHeight: "3rem",
                  letterSpacing: "-1.71pxpxs",
                  textTransform: "uppercase",
                }}
              >
                Contact
              </Typography>{" "}
              Our Experts Today!"
            </Typography>
            <Typography
              sx={{
                color: "#10271D",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "28px",
                letterSpacing: "-1.71pxpxs",
                textTransform: "uppercase",
              }}
            >
              Whether you have a question about our services, need assistance
              with your energy plan, or want to learn more about how we can
              support your business, we’re here to help.
            </Typography>
          </Grid>

          <Grid
            item
            size={{ lg: 5 }}
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="standard"
              InputLabelProps={{
                shrink: false,
                sx: { left: "30px", top: "-9px" },
              }} // ✅ Keeps label in line with icon
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline sx={{ marginTop: "-20px" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Phone"
              variant="standard"
              InputLabelProps={{
                shrink: false,
                sx: { left: "30px", top: "-9px" },
              }} // ✅ Keeps label in line with icon
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlined
                      sx={{ color: "salmon", marginTop: "-20px" }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Email Address"
              variant="standard"
              InputLabelProps={{
                shrink: false,
                sx: { left: "30px", top: "-9px" },
              }} // ✅ Keeps label in line with icon
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined
                      sx={{ color: "salmon", marginTop: "-20px" }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Subject"
              variant="standard"
              InputLabelProps={{
                shrink: false,
                sx: { left: "30px", top: "-9px" },
              }} // ✅ Keeps label in line with icon
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InfoOutlined
                      sx={{ color: "salmon", marginTop: "-20px" }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="How can we help you? Feel free to get in touch!"
              variant="standard"
              InputLabelProps={{
                shrink: false,
                sx: { left: "30px", top: "-9px" },
              }} // ✅ Keeps label in line with icon
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Edit sx={{ color: "salmon", marginTop: "-20px" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              startIcon={<SendIcon />}
              sx={{
                marginTop: "1rem",
                width: "200px",
                height: "55px",
                backgroundColor: "var(--primaryDarkColor)",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#FFFFFF",
                borderRadius: "50px",
              }}
            >
              Get in Touch
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "400px", sm: "450px", md: "500px", lg: "523px" },
            overflow: "hidden",
            background:
              "linear-gradient(to right, rgba(30, 30, 30, 0.9), rgba(42, 42, 43, 0))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -700,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url(/ContactBg.jpg)",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //transform: "scaleX(-1)",
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "500",
                fontSize: "64px",
                lineHeight: "25px",
              }}
            >
              Produce Your Own Clean Energy
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "1rem",
                width: "201px",
                height: "56px",
                backgroundColor: "var(--primaryDarkColor)",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#FFFFFF",
                borderRadius: "50px",
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
