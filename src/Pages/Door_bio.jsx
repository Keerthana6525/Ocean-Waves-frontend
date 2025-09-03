
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
import bannerImg from "../assets/door-banner.jpg";

// Example Door Product Images
import img1 from "../assets/door-1.jpg";
import img2 from "../assets/door-3.jpg";
import img3 from "../assets/door-6.jpg";
import img4 from "../assets/door-4.jpg";
import img5 from "../assets/door-5.jpg";

//About images
import aboutimg1 from "../assets/access-card.jpg";
import aboutimg2 from "../assets/credit-card.jpg";
import aboutimg3 from "../assets/fingerprint.jpg";

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
  { src: img4},
  { src: img5 },
];

const services = [
  { src: service1, name: "CCTV Security System" },
  { src: service2, name: "Office Equipments & Computers" },
  { src: service3, name: "Door Access & Attendance System" },
  { src: service4, name: "Swing & Sliding Gate" },
  { src: service5, name: "Network Surveillance" },
  { src: service6, name: "Tent & Car Porch" },
];

// About Section Data
const aboutSections = [
  {
    img: aboutimg1,
    title: "ACCESS CARD",
    fullText: `The access card may be thought of as an electronic "key". 
      It is used by persons to gain access through the doors secured 
      by the access control system. Each access card is uniquely encoded. 
      Most access cards are approximately the same size as a standard credit card.`,
    shortText: `The access card may be thought of as an electronic "key". 
      It is used to access doors securely.`,
  },
  {
    img: aboutimg2,
    title: "CARD READERS",
    fullText: `Card readers are the devices used to electronically "read" the access card. 
    Card readers may be of the "insertion" type (which require insertion of the card into the reader), or may be of the "proximity" type (which only require that the card be held in a 3" to 6" proximity of the reader.) 
    Card readers are usually mounted on the exterior (non-secured) side of the door that they control.`,
    shortText: `Card readers verify the unique data on access cards.`,
  },
  {
    img: aboutimg3,
    title: "ACCESS CONTROL KEYPADS",
    fullText: `Access control keypads are devices which may be used in addition to or in place of card readers. 
    The access control keypad has numeric keys which look similar to the keys on a touch-tone telephone.
     The access control keypad requires that a person desiring to gain access enter a correct numeric code.
      When access control keypads are used in addition to card readers, 
    both a valid card and the correct code must presented before entry is allowed.`,
    shortText: `Keypads allow access using PIN codes.`,
  },
];

function Door_bio() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:1050px)");

  const [showMoreStates, setShowMoreStates] = useState(
    Array(aboutSections.length).fill(false)
  );

  const toggleShowMore = (index) => {
    const updated = [...showMoreStates];
    updated[index] = !updated[index];
    setShowMoreStates(updated);
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      gap:theme.spacing(3)
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
            color: "#000",
            fontFamily:"sans-serif",
            fontSize:{xs:20,sm:35,md:40},
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(248, 245, 245, 0.8)",
            textAlign: "center",
          }}
        >
          DOOR ACCESS & BIOMETRIC TIME ATTENDANCE
        </Typography>
      </Box>

      {/* Slider Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2, bgcolor: "#fff" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, textAlign: "center",color:"#080808ff" }}
        >
          Our Products
        </Typography>

        
      </Box>

      {/* About Sections */}
      {aboutSections.map((section, index) => (
        <Box
          key={index}
          sx={{
            pt: { xs: 1, md: 12 },
            pb: { xs: 2, md: 10 },
            px: {xs:1,sm:2,md:4},
            mt: 3,
            mx:4,
            bgcolor: "#e0d7daff",
            // border:"5px solid #666866ff"
          }}
        >
          <Container>
            <CustomBox>
              <ImgContainer>
                <Box
                  component="img"
                  src={section.img}
                  alt={section.title}
                  sx={{
                    maxWidth: "500px",
                    width: { xs: "250px", sm: "300px", md: "500px" },
                    height: "auto",
                    // border:"3px solid black"
                  }}
                />
              </ImgContainer>

              <Box>
                <Typography
                  sx={{
                    fontSize: {xs:20,sm:25,md:35},
                    color: "black",
                    fontWeight: "700",
                    my: 3,
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "18px", color: "black", lineHeight: "27px" }}
                >
                  {isSmallScreen && !showMoreStates[index]
                    ? section.shortText
                    : section.fullText}
                </Typography>

                {isSmallScreen && (
                  <Button
                    onClick={() => toggleShowMore(index)}
                    sx={{ mt: 2
                      ,color: "#5f8354",             
                  fontWeight: "bold",
                  textTransform: "none",        
                  "&:hover": { color: "#4d6b49" } 
                }}
                variant="text" 
                     
                  >
                    {showMoreStates[index] ? "Show Less" : "Read More"}
                  </Button>
                )}
              </Box>
            </CustomBox>
          </Container>
        </Box>
      ))}
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
                  bgcolor: "#ece2e6ff",
                  border:"5px solid #a19fa0ff",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  m:4,
                  p: 3,
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
                    bgcolor: "#5f8354ff",color:"#fff",
                    "&:hover": { bgcolor: "#4d6b49ff" ,color:'#99cab3ff'},
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

export default Door_bio;




