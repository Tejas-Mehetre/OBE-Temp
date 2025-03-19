import React, { useState } from "react";
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import navLinks from "../Data/navLinks"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const isHidden = useMediaQuery("(max-width: 960px)");
  const isSmallScreen = useMediaQuery("(max-width: 1400px)");
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const Buttons = () => {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: isHidden ? "column" : "row", gap: isSmallScreen ? 1.5 : 2.5, alignItems: "center", marginLeft: "200" }}>
          <Button
            variant="outlined"
            sx={{
              width: { lg: "180px", md: "150px" },
              height: "40px",
              color: "var(--primaryDarkColor)",
              border: "solid var(--primaryDarkColor) 2px",
              borderRadius: "50px",
              marginLeft: isSmallScreen ? "15px" : "0px",
              // fontFamily:"BR Sonoma",
              textTransform: "none",
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              width: { lg: "180px", md: "150px" },
              height: "40px",
              borderRadius: "50px",
              backgroundColor: "var(--primaryDarkColor)",
              color: "white",
              marginLeft: isSmallScreen ? "15px" : "0px",
              // fontFamily:"BR Sonoma",
              textTransform: "none",
            }}
          >
            Request a Quote
          </Button>
        </Box>
      </>
    )
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (item) => {
    setActiveLink(item.url);
    navigate(item.url.startsWith("/") ? item.url : `/${item.url}`);
  };

  if (isHidden) return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{ position: "fixed", top: 10, left: 10, zIndex: 1100 }}
      >
        <MenuIcon sx={{ fontSize: 32 }} />
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
            src="/LogoLight.png"
            alt="Logo"
            sx={{
              height: "4rem",
              width: "13rem",
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
      left: 0,
      top: 0,
      zIndex: "1000",
      paddingTop: "10px"
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/LogoIcon.png"
            alt="Logo"
            sx={{
              height: { md: "1.5rem", lg: "2rem" },
              cursor: "pointer",
              marginRight: "10px",
              marginBottom: "10px"
            }}
          />
          <Box
            component="img"
            src="/LogoLight.png"
            alt="Logo"
            sx={{
              height: { md: "4rem", lg: "5rem" },
              cursor: "pointer",
              marginBottom: "10px"
            }}
          />
          <Box
            component="nav"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: isSmallScreen ? 1.5 : 4,
              alignItems: "center",
              marginLeft: "30px"
            }}
          >
            {navLinks.map((item, index) => (
              <a
                key={index}
                onClick={() => handleClick(item)}
                style={{
                  position: "relative",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.3s, font-size 0.3s ease-in-out",
                  paddingBottom: "5px",
                  display: "inline-block",
                  letterSpacing: "1px",
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
                    backgroundColor: activeLink === item.link ? "var(--primaryDarkColor)" : "transparent",
                    transition: "background-color 0.3s ease-in-out",
                    fontFamily: '"Montserrat", "Sans-serif"',
                    fontWeight: "500",
                    fontSize: "15px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    lineHeight: "1.5em",
                  }}
                ></span>
              </a>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: isHidden ? "left" : "center",
            gap: isSmallScreen ? 2 : 3,
          }}
        >
          <Buttons />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;


