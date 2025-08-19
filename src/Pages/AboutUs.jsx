import React, { useState } from 'react';
import { styled, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import aboutimg2 from "../assets/aboutus-img.jpg"

const AboutUs = () => {
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

  const fullText = `Ocean Waves Security Systems was established in the year 2006 in Abu Dhabi,
   the capital of United Arab Emirates.Determined to serve the needs of computer users, and today 
   became one of the top computer and computer-product retailers in the industry. Our success has been built on a simple
   principle: take care of every customer like they were a member of our family. 
   From the beginning, our top priority was to provide unmatched customer care and to help our 
   customers understand how technology could help them.Our commitment goes beyond simply reducing 
   prices on the 6,000+ products we stock and supply for your daily office needs. We strive to
    deliver comprehensive solutions that enhance workplace efficiency by combining outstanding
     customer service, quick turnaround times, and a constantly evolving product range. By 
     anticipating the demands of today's fast-changing office environment, we ensure that you
      always have access to the best tools and resources to keep your business running smoothly.`

  const shortText = `Ocean Waves Security Systems was established in the year 2006 in Abu Dhabi,
   the capital of United Arab Emirates...`;

  return (
    <Box sx={{ pt: { xs: 14, md: 16 }, pb: {xs:5,md:10}, px: 2 ,bgcolor: "#eff5f1ff"}}>
      <Container>
        <CustomBox>
          <ImgContainer>
            
            <Box
                    component="img"
                    src={aboutimg2}
                    alt="about"
                    sx={{
                    maxWidth: '500px',
                    width: {
                        xs: '250px',
                        sm: '300px',
                        md: '500px',
                    },
                    height: 'auto'
                    }}
                />    
          </ImgContainer>

          <Box>
            <Typography sx={{ fontSize: '35px', color: 'black', fontWeight: '700', my: 3 }}>
              ABOUT OUR COMPANY
            </Typography>

            <Typography sx={{ fontSize: '18px', color: 'black', lineHeight: '27px' }}>
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

export default AboutUs;
