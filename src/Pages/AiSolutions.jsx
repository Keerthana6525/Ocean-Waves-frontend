import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Banner Image
import bannerImg from "../assets/ai-banner.jpg";  

// Example AI Product Images
import aiCctvImg from "../assets/ai-surveillance.jpg";
import smartHomeImg from "../assets/smarthome1.jpg";
import automationImg from "../assets/business-auto.webp";
import officeImg from "../assets/ai-equipmt.jpg";


// About Us Image
import aboutImg from "../assets/ai-cctv1.webp"; 

const aiProducts = [
  { src: aiCctvImg, name: "AI CCTV Surveillance" },
  { src: smartHomeImg, name: "Smart Home Automation" },
  { src: automationImg, name: "Business Automation" },
  {src:officeImg, name:"AI-Powered Office Solutions"}
];

function AiSolutions() {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      gap: theme.spacing(2),
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const fullText = `OceanWaves AI Solutions bring cutting-edge intelligence to homes, businesses,
  and industries. From AI-powered CCTV surveillance to predictive analytics, our 
  solutions are designed to make environments safer, smarter, and more efficient.`;

  const shortText = `OceanWaves AI Solutions deliver smarter, safer, and efficient technology.`;

  return (
    <Box sx={{ bgcolor: "#ffff", pb: 6 }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 200, md: 300 },
          mb: 6,
        }}
      >
        <img
          src={bannerImg}
          alt="AI Solutions Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "sans-serif",
            fontSize: { xs: 20, sm: 35, md: 40 },
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            textAlign: "center",
          }}
        >
          AI SOLUTIONS
        </Typography>
      </Box>

      {/* Slider Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2, bgcolor: "#fff" }}>
        <Typography
          sx={{
            fontSize: { xs: 25, sm: 35, md: 45 },
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
            color: "#000",
          }}
        >
          Our AI Products
        </Typography>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          style={{ padding: "20px 0" }}
        >
          {aiProducts.map((prod, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src={prod.src}
                  alt={prod.name}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ mt: 2, mb: 1, color: "#333" }}
                >
                  {prod.name}
                </Typography>

                {/* WhatsApp Enquiry Button */}
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#4A6B4A",
                    "&:hover": { bgcolor: "#278127ff" },
                  }}
                  fullWidth
                  component="a"
                  href={`https://wa.me/7150580529?text=Hi, I'm interested in ${prod.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquiry
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          pt: { xs: 4, md: 14 },
          pb: { xs: 2, md: 10 },
          px: { xs: 1, sm: 2, md: 4 },
          mt: 3,
          bgcolor: "#f9fcfaff",
        }}
      >
        <Container>
          <CustomBox>
            <ImgContainer>
              <Box
                component="img"
                src={aboutImg}
                alt="about"
                sx={{
                  maxWidth: "500px",
                  width: { xs: "250px", sm: "300px", md: "500px" },
                  height: "auto",
                }}
              />
            </ImgContainer>

            <Box>
              <Typography
                sx={{ fontSize: "18px", color: "black", lineHeight: "27px" }}
              >
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
    </Box>
  );
}

export default AiSolutions;
