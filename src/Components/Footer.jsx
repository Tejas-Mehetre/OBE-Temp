import React, { useState } from 'react'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import LogoIcon from "/LogoIcon.png"
import Logo from "/LogoDark.png"
import  navLinks  from '../Data/navLinks';
import { Facebook, Instagram, Language, Twitter } from '@mui/icons-material';


const Footer = () => {
  const [activeLink, setActiveLink] = useState("/"); 

  const handleClick = (item) => {
    setActiveLink(item.link); 
  };


  return (
    <>


    <Box
      sx={{ 
        backgroundColor: "var(--cardBackgroundColor)", 
        padding: {xs:"2rem 3rem",md:"6rem 10rem"}, 
      }}
    >
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection:{xs:"column",lg:"row"},
          justifyContent: "space-between", 
          alignItems: "center" ,
          paddingBottom:"1.5rem",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "var(--primaryDarkColor)",
          gap:{xs:"2rem"}
        }}
      >
        
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Box component="img" src={LogoIcon} sx={{ width:{xs:"2rem", md:"2rem"} }} />
          <Box component="img" src={Logo} sx={{ width: {xs:"15rem",md:"20rem"} }} />
        </Box>

      
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List sx={{ display: "flex", gap:"2rem" }}>
              {navLinks.map((item, index) => (
                <ListItem 
                  key={index} 
                  sx={{ cursor: "pointer", padding: "0", position: "relative" }} 
                  onClick={() => handleClick(item)}
                >
                  <ListItemText 
                    primary={item.name} 
                    sx={{ 
                      whiteSpace: "nowrap",
                      color: "var(--primaryDarkColor)",
                      fontFamily:"Inter",
                      fontWeight:"400",
                      fontSize:"16px",
                      lineHeight:"22.5px",
                      position: "relative",
                      "&::after": activeLink === item.link ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: "-4px", 
                        width: "100%",
                        height: "2px", 
                        backgroundColor: "var(--textColor)"
                      } : {}
                    }} 
                  />
                </ListItem>
              ))}
            </List>
        </Box>
      </Box>


      <Box 
        sx={{ 
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          justifyContent: { xs:"start", sm:"center", md: "space-between" },
          alignItems: { xs: "start",sm:"center", md: "flex-start" },
          flexWrap: "wrap",
          marginTop: "3rem",
          gap: { xs: "2rem", md: "0" }, 
          padding: { xs: "1rem", md: "0" },
        }}
      >
        
        
        <Box sx={{ maxWidth: { xs: "100%", md: "35%" }, textAlign: { xs: "left",sm:"center", md: "left" } }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "var(--footertextColor)", 
              fontFamily: "DM Sans", 
              fontSize: "17px", 
              fontWeight: "400", 
              lineHeight: "1.56rem" 
            }}
          >
            Registered office address
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: "var(--footertextColor)", fontSize: "17px", lineHeight: "1.56rem" }}
          >
            23 North Mills, Leicester, Leicestershire, England, LE3 5AG
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: "var(--footertextColor)", fontSize: "17px", lineHeight: "1.56rem" }}
          >
            Home Energy Ltd trading as One Business Energy is registered in England and Wales.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: "var(--footertextColor)", fontSize: "17px", lineHeight: "1.56rem" }}
          >
            Company registration number 
            <span style={{ color: "var(--primaryDarkColor)", fontWeight: "600" }}> 10364306.</span>
          </Typography>
        </Box>

        
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "flex-start", 
            maxWidth: { xs: "100%", md: "30%" }, 
            textAlign: { xs: "left",sm:"center", md: "left" } 
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ color: "var(--textColor)", fontFamily: "Inter", fontSize: "19.5px", fontWeight: "400", lineHeight: "1.8rem" }}
          >
            +0333 577 0334
          </Typography>
          <Typography 
            sx={{ color: "var(--primaryDarkColor)", fontFamily: "DM Sans", fontWeight: "400", fontSize: "17px", lineHeight: "28.22px" }}
          >
            hello@onebusinessenergy.com
          </Typography>
        </Box>

        
        <Box 
          sx={{ 
            textAlign: { xs: "left",sm:"center", md: "right" }, 
            maxWidth: { xs: "100%", md: "30%" } 
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ color: "var(--textColor)", fontFamily: "DM Sans", fontWeight: "400", fontSize: "17px", lineHeight: "28.22px" }}
          >
            Get Fresh updates.
          </Typography>
          <Typography 
            href="#" 
            sx={{ color: "var(--primaryDarkColor)", fontFamily: "DM Sans", fontWeight: "600", fontSize: "17px", lineHeight: "28.22px", cursor: "pointer" }}
          >
            Just Subscribe
          </Typography>
        </Box>

      </Box>


    
      <Box sx={{ marginTop: "2rem", display: "flex", flexDirection: {xs:"column-reverse",md:"row"}, justifyContent: "space-between", alignItems: "center" ,gap:"1rem"}}>

          <Typography variant="body2" sx={{ color: "#FFA2A2",marginTop:"1rem" ,fontFamily:"DM Sans",fontWeight:{xs:"500",sm:"400"},fontSize:{xs:"13px",sm:"16px"},lineHeight:"28.22px"}}>
            One Business Energy © 2025. All Rights Reserved.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
            <IconButton sx={{ color: "var(--textColor)", backgroundColor: "var(--primaryDarkColor)" }}><Facebook /></IconButton>
            <IconButton sx={{ color: "var(--textColor)", backgroundColor: "var(--primaryDarkColor)" }}><Twitter /></IconButton>
            <IconButton sx={{ color: "var(--textColor)", backgroundColor: "var(--primaryDarkColor)" }}><Language /></IconButton>
            <IconButton sx={{ color: "var(--textColor)", backgroundColor: "var(--primaryDarkColor)" }}><Instagram /></IconButton>
          </Box>

      </Box>

    </Box>
    

    </>
  )
}

export default Footer
