import React from "react";
import { Box, Grid, Typography, Link, Divider, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "../assets/ocean-waves.png";
import qr from "../assets/qr-code.jpg"

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#4A6B4A",
        color: "white",
        minHeight:"350px",
        pt: 8,
        pb: 6,
        px: { xs: 2, sm: 4, md: 2 }
      }}
    >
      <Grid container spacing={6} justifyContent="center">
        {/* Left Side - Logo + About */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Ocean Waves"
              sx={{ height: 80, mr: 2 }}
            />
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "18px", sm: "22px", md: "34px" },
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                أمواج المحيط للأنظمة الأمنية م.م.ذ
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "26px" },
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                OCEAN WAVES SECURITY SYSTEM L.L.C.
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ maxWidth: 400, lineHeight: "30px" }}>
            Ocean Waves Security Systems was established in the year 2006 in Abu
            Dhabi, the capital of United Arab Emirates.
          </Typography>
        </Grid>

        {/* Right Side - Contact + Follow Us */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={6}>
            {/* Contact Info */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: "30px" }}>
                📍 Near Lulu Xpress Hypermarket,
                <br /> Hamdan St. P.O Box: 107183,
                <br /> Abu Dhabi - U.A.E.
                <br />
                📞 +971 2 67 67 921
                <br />
                📧{" "}
                <Link
                  href="mailto:info@oceanwavesad.com"
                  color="inherit"
                  underline="hover"
                >
                  info@oceanwavesad.com
                </Link>
              </Typography>
            </Grid>

            {/* Follow Us + QR */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Follow Us
              </Typography>
              <Box>
                <IconButton
                  href="#"
                  color="inherit"
                  sx={{ mr: 1 }}
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="#"
                  color="inherit"
                  sx={{ mr: 1 }}
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="#"
                  color="inherit"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Box
                  component="img"
                  src={qr}
                  alt="QR Code"
                  sx={{ height: 100 }}
                />
                <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                  For More Details, Scan QR Code
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5, borderColor: "rgba(249, 244, 244, 0.96)" }} />

      {/* Copyright */}
      <Typography variant="body2" align="center" color="#fff">
        © {new Date().getFullYear()} Ocean Waves Security System L.L.C. | Design:
        SYSBREEZE
      </Typography>
    </Box>
  );
}

export default Footer;
