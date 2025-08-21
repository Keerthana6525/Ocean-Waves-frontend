
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
import bannerImg from "../assets/office-banner.jpg";

// Example Network Product Images
import img1 from "../assets/office-1.jpg";
import img2 from "../assets/office-2.jpg";
import img3 from "../assets/office-3.jpg";
import img4 from "../assets/office-4.jpg";
import img5 from "../assets/office-5.jpg";
import img6 from "../assets/office-6.jpg";
import img7 from "../assets/office-7.jpg";
import img8 from "../assets/office-8.jpg";
import img9 from "../assets/office-9.jpg";
import img10 from "../assets/office-10.jpg";
import img11 from "../assets/office-11.jpg";
import img12 from "../assets/office-12.jpg";
import img13 from "../assets/office-13.jpg";
import img14 from "../assets/office-14.jpg";
import img15 from "../assets/office-15.jpg";
import img16 from "../assets/office-16.jpg";



// About Us Image
import aboutimg2 from "../assets/office.jpg";

// Services Images
import service1 from "../assets/cctv-ser.jpg"; 
import service2 from "../assets/office-ser.jpg";
import service3 from "../assets/door-acess-ser.jpg";
import service4 from "../assets/gate-ser.jpg";
import service5 from "../assets/networks-ser.jpg";
import service6 from "../assets/car-proches-ser.jpg";


const networkProducts = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4},
  { src: img5 },
    { src: img16 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },

];

const services = [
  { src: service1, name:  "CCTV Security System"},
  { src: service2, name: "Office Equipments & Computers" },
  { src: service3, name: "Door Access & Attendance System" },
  { src: service4, name: "Swing & Sliding Gate" },
  { src: service5, name: "Network Surveillance" },
  { src: service6, name: "Tent & Car Porch" },

];

function Computers() {
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

  const fullText = `Information is the lifeblood of any successful organization. The key to leveraging information
   to your advantage is purchasing and implementing the right computers and software for your business. You will 
   also want to explore systems for backing up your business data. There are 
  many online services available now that will save you from having to invest in secure and reliable on-site backup equipment for your office.`;

  const shortText = `Information is the lifeblood of any successful organization. The key to leveraging information
   to your advantage is purchasing and implementing the right computers..`;

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
          alt="Office Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#141414ff",
            fontSize:{xs:20,sm:35,md:40},
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(247, 241, 241, 0.8)",
            textAlign: "center",
          }}
        >
          OFFICE EQUIPMENTS & COMPUTERS
        </Typography>
      </Box>

      {/* Slider Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 ,bgcolor:"#fff"}}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3, textAlign: "center",color:"#000"}}
        >
          Our Network Products
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
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#5f8354ff",
                    "&:hover": { bgcolor: "#4d6b49ff" },
                  }}
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
          pt: { xs: 10, md: 14 },
          pb: { xs: 5, md: 10 },
          px: 2,
          mt: 6,
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
                <Button onClick={() => setShowMore(!showMore)} sx={{ mt: 2 }}>
                  {showMore ? "Show Less" : "Read More"}
                </Button>
              )}
            </Box>
          </CustomBox>
        </Container>
      </Box>

      {/* Types of Services Section */}
      <Box sx={{ py: 8, bgcolor: "#fff" }}>
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

export default Computers;

