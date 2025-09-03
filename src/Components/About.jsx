import React, { useState } from 'react';
import { styled, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import aboutimg from "../assets/about.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumRange = useMediaQuery("(min-width:800px) and (max-width:1030px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(10),
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      textAlign: 'center',
      gap: theme.spacing(3),
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
   the capital of United Arab Emirates.Determined to serve the needs of computer users, and today became one of the
   top computer and computer-product retailers in the industry. Our success has been built on a simple
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

  const shouldShowShort = (isSmallScreen || isMediumRange) && !showMore;

  return (
    <Box sx={{ pt: { xs: 8, md: 16 }, pb: {xs:1.5,sm:3,md:10}, px: 2 ,bgcolor: "#fff"}}>
      <Container>
        <CustomBox>
          <ImgContainer>
            
            <Box
                    component="img"
                    src={aboutimg}
                    alt="about"
                    sx={{
                    maxWidth: '500px',
                    width: {
                        xs: '290px',
                        sm: '320px',
                        md: '500px',
                    },
                    height: 'auto',
                    border:'3px solid black'
                    }}
                />    
          </ImgContainer>

          <Box  sx={{my: {xs:0,sx:0.8,md:2}}}>
            <Typography sx={{ fontSize: {xs:"28px",md:'35px'},fontFamily:'sans-serif' ,color: 'black', fontWeight: '700', my: {xs:1,md:2} }}>
              OCEAN WAVES SECURITY SYSTEM L.L.C.
            </Typography>

            <Typography sx={{ fontFamily:'"Hind Vadodara",sans-serif',fontSize: '18px', color: 'black', lineHeight: '27px' }}>
              {shouldShowShort ? shortText : fullText}
            </Typography>

            {(isSmallScreen || isMediumRange) && (
              <Button onClick={() => setShowMore(!showMore)} sx={{ mt: 2
                ,color: "#5f8354",             
                  fontWeight: "bold",
                  textTransform: "none",        
                  "&:hover": { color: "#4d6b49" } 
                }}
                variant="text" 
               >
                {showMore ? "Show Less" : "Read More"}
              </Button>
            )}
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default About;
