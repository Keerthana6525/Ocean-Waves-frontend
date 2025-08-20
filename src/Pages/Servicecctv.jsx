import React, { useState } from 'react';
import { styled, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import servicecctvimg from "../assets/cctvser1.jpg";

import img1 from "../assets/cctvbanner.jpg";
import img2 from "../assets/cctv-camers.jpg";
import img3 from "../assets/cctv-cablefree.jpg";
import img4 from "../assets/cctv-surveillance-camera.jpg";


const Servicecctv = () => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(10),
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const fullText = `Get the ultimate security for your business or home premises with our advanced CCTV 
  and Access control system in Dubai, UAE. Our sophisticated camera monitoring and access-controls will 
  give you peace of mind knowing that your property is safe and secure from any threats or intrusions. 
  Let us help you fortify your premises with a tailor-made solution to fit all of your needs. Take 
  advantage of our expertise and experience, and enjoy complete protection with customized solutions
   that go beyond the ordinary! We are always promised to provide impeccable customer service and support.
    We are selling the leading CCTV brand cameras like HikVision, UNV, Dahua, etc. We have a bunch of skilled 
    certified CCTV professionals to install CCTV surveillance cameras in your home, villa, or business. Our 
    experience and expertise in CCTV help us understand the client’s concerns and requirements for 
  the safety and security of their premises quickly and deliver the optimum result to satisfy them.

`

  const shortText = `Get the ultimate security for your business or home premises with our advanced CCTV 
  and Access control system in Dubai, UAE. Our sophisticated camera monitoring and access-controls `;

  return (
    <Box sx={{ pt: { xs: 10, md: 16 }, pb: {xs:5,md:10}, px: 2 ,bgcolor: "#fff"}}>
      <Container>
        <Box
      sx={{
        position:"relative",
        width: "100%",
        height: "300px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        // gap: "1px",
        overflow: "hidden",
        borderRadius: 2
      }}
    >
      {/* Large Image (takes more space) */}
      <Box
        component="img"
        src={img1}
        alt="img1"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
          gridColumn: "span 2", // takes 2 column width
        }}
      />
      {/* Other smaller images */}
      <Box
        component="img"
        src={img2}
        alt="img2"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
      <Box
        component="img"
        src={img3}
        alt="img3"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
      <Box
        component="img"
        src={img4}
        alt="img4"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
      {/* Overlay Title */}
  <Typography
    variant="h3"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#180303ff",
      fontWeight: "bold",
      textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
      textAlign: "center",
      px: 2,
    }}
  >
    Security & Surveillance
  </Typography>
    </Box>
        <CustomBox sx={{mt:5}}>
          <ImgContainer>
            
            <Box
                    component="img"
                    src={servicecctvimg}
                    alt="about"
                    sx={{
                    maxWidth: '600px',
                    width: {
                        xs: '250px',
                        sm: '400px',
                        md: '500px',
                    },
                    height: 'auto',
                    // border:'3px solid black'
                    }}
                />    
          </ImgContainer>

          <Box>
           

            <Typography sx={{ fontSize: '16px', color: 'black', lineHeight: '27px' }}>
              {isSmallScreen && !showMore ? shortText : fullText}
            </Typography>

            {isSmallScreen && (
              <Button onClick={() => setShowMore(!showMore)} sx={{ mt: 2 }}>
                {showMore ? "Show Less" : "Read More"}
              </Button>
            )}
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Servicecctv;
