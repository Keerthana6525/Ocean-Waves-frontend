import React, { useEffect, useState } from "react";
import { Box, Typography, Fade } from "@mui/material";

const announcements = [
  "Now offering AI-powered CCTV Surveillance Solutions",
  "Special Discounts on Biometric Access Control Systems -Limited Time Offer",
  "24/7 Remote Monitoring Service Now Available for Businesses",
  "New Product Launch: Smart Sliding Gate Motors with Safety Sensors",
  "Annual Maintenance Contracts Available -Book Yours Today",
  "We are ISO Certified - Ensuring Quality and Reliability in Every Service",
  "Introducing Cloud-Based Video Storage Solutions for Enterprises",
  "Upgraded Intrusion Alarm Systems with Mobile Alerts",
  "Smart Home Security Packages - Secure Your Home with the Latest Technology",
  "Our Technical Support Hotline is Now Available 24/7 for All Clients"
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#4A6B4A",
        color: "white",
        minHeight: { xs: 50, sm: 65 },
        overflow: "hidden",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        
        
      }}
    >
      {/* Announcement label */}
      <Box
        sx={{
          flexShrink: 0,
          px: { xs: 2, sm: 3 },
          py: { xs: 1, sm: 0 },
          backgroundColor: "#141212ff",
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.4rem" },
          borderRadius: { xs: "0", sm: "0 20px 20px 0" },
          textAlign: "center",
        }}
      >
        Announcements
      </Box>

      {/* Fade in/out announcements */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 3 },
          py: { xs: 0.5, sm: 0 },
          position: "relative",
          minHeight: { xs: 50, sm: 60 },
        }}
      >
        {announcements.map((text, index) => (
          <Fade
            in={index === currentIndex}
            timeout={{ enter: 500, exit: 500 }}
            key={index}
            unmountOnExit
          >
            <Typography
              sx={{
                position: "absolute",
                fontFamily: '"Roboto", sans-serif',
                fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.4rem" },
                whiteSpace: { xs: "normal", sm: "nowrap" },
                lineHeight: 1.3,
              }}
            >
              {text}
            </Typography>
          </Fade>
        ))}
      </Box>
    </Box>
  );
};

export default AnnouncementBar;
