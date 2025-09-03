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
import bannerImg from "../assets/cctv-banner1.jpg";

// Example Network Product Images
import img1 from "../assets/cctv-camers.jpg";
import img2 from "../assets/cctvser1.jpg";
import img3 from "../assets/cctv-surveillance-camera.jpg";
import img4 from "../assets/cctv1.jpg";
import img5 from "../assets/cctv-cablefree.jpg";
import img6 from "../assets/cctv.jpg";


// About Us Image
import aboutimg2 from "../assets/cctvbanner.jpg";

// Services Images
import service1 from "../assets/cctv-ser.jpg"; 
import service2 from "../assets/office-ser.jpg";
import service3 from "../assets/door-acess-ser.jpg";
import service4 from "../assets/gate-ser.jpg";
import service5 from "../assets/networks-ser.jpg";
import service6 from "../assets/car-proches-ser.jpg";


const networkProducts = [
  { src: img1},
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },

];

const services = [
  { src: service1, name:  "CCTV Security System"},
  { src: service2, name: "Office Equipments & Computers" },
  { src: service3, name: "Door Access & Attendance System" },
  { src: service4, name: "Swing & Sliding Gate" },
  { src: service5, name: "Network Surveillance" },
  { src: service6, name: "Tent & Car Porch" },

];

function Servicecctv() {
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
      gap:theme.spacing(1)
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

  const fullText = `Get the ultimate security for your business or home premises with our advanced CCTV and 
  Access control system in Dubai, UAE. Our sophisticated camera monitoring and access-controls will give you
   peace of mind knowing that your property is safe and secure from any threats or intrusions. Let us help 
   you fortify your premises with a tailor-made solution to fit all of your needs. Take advantage of our 
   expertise and experience, and enjoy complete protection with customized solutions that go beyond the ordinary!
    We are always promised to provide impeccable customer service and support. We are selling the leading CCTV brand cameras like HikVision, UNV,
   Dahua, etc. We have a bunch of skilled certified CCTV professionals to install CCTV surveillance cameras in your home, villa, or business.`;

  const shortText = `Get the ultimate security for your business or home premises with our advanced CCTV and 
  Access control system in Dubai, UAE. Our sophisticated camera..`;

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
          alt="Networking Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Typography
          
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#f7f4f4ff",
            fontFamily:"sans-serif",
            fontSize:{xs:25,sm:34,md:40},
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(15, 15, 15, 0.8)",
            textAlign: "center",
          }}
        >
          CCTV CAMERAS
        </Typography>
      </Box>

      {/* Slider Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 ,bgcolor:"#fff"}}>
        <Typography
          
          sx={{fontSize:{xs:25,sm:35,md:45},fontWeight: "bold", mb: {xs:0,sm:1,md:3}, textAlign: "center",color:"#000"}}
        >
          Our Products
        </Typography>
      <Box
                  sx={{
                  "& .swiper-button-next, & .swiper-button-prev": {
                    color: "#141b11ff",   
                  },
                  "& .swiper-button-next::after, & .swiper-button-prev::after": {
                  fontSize: "35px",   
                  },
                  }}
                >
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
          {networkProducts.map((prod, index) => (
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
                   {/* Enquiry Button */}
                      <Button
                          variant="contained"
                            sx={{
                                mt: 2,
                                bgcolor: "#4A6B4A",color:'#fff',
                                "&:hover": { bgcolor: "#278127ff" ,color:'#99cab3ff'},
                                 }}
                           fullWidth
                           component="a"
                          href={`https://wa.me/7150580529?text=Hi, I'm intrested in ${prod.name}`}
                          target="_blank"
                          rel="noopener norefferrer"
                       >
                        Enquiry
                      </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        </Box>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          pt: { xs: 4, md: 14 },
          pb: { xs: 2, md: 10 },
          px: {xs:1,sm:2,md:4},
          mt: 3,
          bgcolor: "#f9fcfaff",
        }}
      >
        <Container>
          <CustomBox>
            <ImgContainer>
              <Box
                component="img"
                src={aboutimg2}
                alt="about"
                sx={{
                  maxWidth: "500px",
                  width: {
                    xs: "250px",
                    sm: "300px",
                    md: "500px",
                  },
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

      {/* Types of Services Section */}
      <Box sx={{ py: {xs:2,sm:4,md:8}, bgcolor: "#fff" }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 5,
              fontWeight: "bold",
              color: "#333",
            }}
            >
            Types Of Services
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.src}
                    alt={service.name}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {service.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Servicecctv;

