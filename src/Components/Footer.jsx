import React from "react";
import { Box, Grid, Typography, Link, Divider, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, LocationOn, Phone, Email } from "@mui/icons-material";
import logo from "../assets/ocean-waves.png";
import qr from "../assets/qr-code.jpg";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#4A6B4A",
        color: "white",
        minHeight: "300px",
        py: 6,
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Grid container spacing={{ xs: 3, sm: 4, md: 8 }} justifyContent="center">
        {/* Left Side - Logo + About */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Ocean Waves"
              sx={{
                height: { xs: 40, sm: 50, md: 70 },
                mr: { xs: 0, md: 2 },
              }}
            />
            <Box sx={{ p: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "13px", sm: "16px", md: "22px", lg: "33px" },
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                أمواج المحيط للأنظمة الأمنية م.م.ذ
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: { xs: "10px", sm: "13px", md: "16px", lg: "20px" },
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                OCEAN WAVES SECURITY SYSTEM L.L.C.
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "10px", sm: "16px" },
              fontFamily: "Arial",
              maxWidth: 500,
              lineHeight: "30px",
            }}
          >
            Ocean Waves Security Systems was established in the year 2006 in Abu
            Dhabi, the capital of United Arab Emirates.
          </Typography>
        </Grid>

        {/* Right Side - Contact + Follow Us */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {/* Contact Info */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h7"
                sx={{ fontFamily: "serif", fontWeight: "bold", mb: 1 }}
              >
                Contact Us
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                <LocationOn sx={{ mr: 1 }} />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Arial", lineHeight: "25px" }}
                >
                  Near Lulu Xpress Hypermarket,
                  <br />
                  Hamdan St. P.O Box: 107183,
                  <br />
                  Abu Dhabi - U.A.E.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ fontFamily: "Arial" }}>
                  +971 2 67 67 921
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ mr: 1 }} />
                <Link
                  href="mailto:info@oceanwavesad.com"
                  color="inherit"
                  underline="hover"
                  sx={{ fontFamily: "Arial" }}
                >
                  info@oceanwavesad.com
                </Link>
              </Box>
            </Grid>

            {/* Follow Us + QR */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h7"
                sx={{
                  fontFamily: "serif",
                  fontWeight: "bold",
                  mb: 1,
                  ml: { xs: 0, sm: 0, md: 6 },
                }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 0,
                  ml: { xs: 3, sm: 0, md: 6 },
                }}
              >
                <IconButton
                  href="#"
                  color="inherit"
                  sx={{ mr: 1, p: 0 }}
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="#"
                  color="inherit"
                  sx={{ mr: 1, p: 0 }}
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/abdul-gaffur-chaliparambil-6b187b293/"
                  color="inherit"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
              </Box>

              <Box sx={{ mt: 2, p: 0 }}>
                <Box
                  component="img"
                  src={qr}
                  alt="QR Code"
                  sx={{ height: 80, ml: { xs: 3, sm: 0, md: 6 } }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    ml: { xs: 0, sm: 0, md: 3 },
                    mt: 1,
                  }}
                >
                  For More Details, Scan QR Code
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider
        sx={{ my: 4, borderColor: "rgba(249, 244, 244, 0.96)" }}
      />

      {/* Copyright */}
      <Typography
        align="center"
        color="#fff"
        sx={{ fontSize: { xs: "10px", sm: "15px" } }}
      >
        © {new Date().getFullYear()} Ocean Waves Security System L.L.C. | Design:
        SYSBREEZE
      </Typography>
    </Box>
  );
}

export default Footer;
