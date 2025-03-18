import React, { useState } from "react";
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
 
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const isHidden = useMediaQuery((theme) => theme.breakpoints.down("md"));
//   const isSmallScreen = useMediaQuery("(max-width: 1400px)");
  const navigate = useNavigate();
//   const { adminSite } = useRdxState();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: <>Home</>, link: "#HowItWork", url: "HowItWork" },
    { name: <>About Us</>, link: "#faqs", url: "https://knowledge.realtyconnect.com/" },
    { name: <>SUCCESS {isSmallScreen ? <></> : <br />} GUARANTEE</>, link: "#SuccessGuarntee", url: "SuccessGuarntee" },
    { name: <>TRAINING & {isSmallScreen ? <></> : <br />} SUPPORT</>, link: "#TrainingAndSupport", url: "TrainingAndSupport" },
    { name: <>WEBSITES & {isSmallScreen ? <></> : <br />} MARKETING</>, link: "#WebsiteAndMarketing", url: "WebsiteAndMarketing" },
    { name: <>SUBMIT A {isSmallScreen ? <></> : <br />} REFERRAL</>, link: "#SubmitRefferals", url: "SubmitRefferals" },
  ];
 
  const Buttons = () => {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: isSmallScreen ? 2.5 : 3.5 }}>
          <Button
            sx={{
              width: "7rem",
              fontSize: isSmallScreen ? "clamp(0.75rem, 1vw, 1rem)" : "1rem",
              backgroundColor: "#E7B01B",
              color: "white",
              marginLeft: isSmallScreen ? "15px" : "0px"
            }}
            onClick={() => {
              window.open(`${import.meta.env.VITE_APP_SITE_URL}/join/?sponsorUUId=${adminSite.sponsorUUID}&teamId=${adminSite.id}`,)
            }}
          >
            AGENT {isSmallScreen ? <></> : <br />} LOGIN
          </Button>
          <Button
            sx={{
              width: "7rem",
              fontSize: isSmallScreen ? "clamp(0.75rem, 1vw, 1rem)" : "1rem",
              backgroundColor: "#62AD53",
              color: "white",
              marginLeft: isSmallScreen ? "15px" : "0px"
            }}
           onClick={()=>{
            navigation("subcription")
           }}

          >
            JOIN {isSmallScreen ? <></> : <br />} TODAY
          </Button>
        </Box>
      </>
    )
  }
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  const handleClick = (item) => {
    setActiveLink(item.link)
 
    if (item.link == "#faqs") {
      window.open(item.url, "_blank")
 
    }
    else {
      navigate(item.url);
    }
  }
 
  if (isHidden) return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{ position: "fixed", top: 10, left: 10, zIndex: 1100 }}
      >
        <MenuIcon sx={{ fontSize: 32, color: "white" }} />
      </IconButton>
 
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: "250px", backgroundColor: "#fff", padding: "10px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box
            component="img"
            src={adminSite.primaryLogo}
            alt="Logo"
            sx={{
              height: "3rem",
              width: "10rem",
              cursor: "pointer",
            }}
          />
          <IconButton onClick={handleDrawerToggle} sx={{ p: 1 }}>
            <CloseIcon />
          </IconButton>
        </Box>
 
        <List>
          {navLinks.map((item, index) => (
            <ListItem sx={{ cursor: "pointer" }} button key={index} onClick={() => { handleClick(item); handleDrawerToggle(); }}>
              <ListItemText sx={{ color: activeLink === item.link ? "#E7B01B" : "#000" }} primary={item.name} />
            </ListItem>
          ))}
          <Buttons />
        </List>
      </Drawer>
    </>
  );
 
 
  return (
    <Box sx={{
      position: "fixed",
      width: "100%",
      letf: 0,
      top: 0,
      zIndex: "1000"
    }}>
      <Box
        sx={{
          margin: "auto",
          paddingLeft: 3,
          paddingRight: 3,
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
 
        }}
      >
        <Box
          component="img"
          src="/public/LogoLight.png"
          alt="Logo"
          sx={{
            height: "5.5rem",
            cursor: "pointer",
            paddingTop: 4,
            paddingBottom: 4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: isSmallScreen ? 2 : 3,
          }}
        >
 
          <Box
            component="nav"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: isSmallScreen ? 1.5 : 4,
              textAlign: "center",
            }}
          >
            {navLinks.map((item, index) => (
              <a
                key={index}
                onClick={() => handleClick(item)}
                style={{
                  position: "relative",
                  textDecoration: "none",
                  color: activeLink === item.link ? "#E7B01B" : "#000",
                  fontSize: isSmallScreen ? "clamp(0.75rem, 1vw, 1rem)" : "1rem",
                  transition: "color 0.3s, font-size 0.3s ease-in-out",
                  paddingBottom: "5px",
                  display: "inline-block",
                  letterSpacing: "1px",
                  fontWeight: activeLink === item.link ? "bold" : "normal",
                  margin: "0 6px",
 
                }}
              >
                {item.name}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: activeLink === item.link ? "#E7B01B" : "transparent",
                    transition: "background-color 0.3s ease-in-out",
                    fontFamily: '"Montserrat", "Sans-serif"',
                    fontWeight: "500",
                    fontFamily: '"Montserrat", "Sans-serif"',
                    fontSize: "15px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    lineHeight: "1.5em",
                  }}
                ></span>
              </a>
            ))}
          </Box>
          <Buttons />
        </Box>
      </Box>
    </Box>
  );
};
 
export default Navbar;
 
 
