
import React, { useState ,useEffect} from "react";
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
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Banner Image
import bannerImg from "../assets/gate-banner.jpg";


//About images
import aboutimg1 from "../assets/gateswing1.jpg";
import aboutimg2 from "../assets/gate-sliding.png";
import aboutimg3 from "../assets/gate-shutter.png";
import aboutimg4 from "../assets/gate-glass-door.jpg";
import aboutimg5 from "../assets/gate-sectional.png";


// Services Images
import service1 from "../assets/cctv-ser.jpg"; 
import service2 from "../assets/office-ser.jpg";
import service3 from "../assets/door-acess-ser.jpg";
import service4 from "../assets/gate-ser.jpg";
import service5 from "../assets/networks-ser.jpg";
import service6 from "../assets/car-proches-ser.jpg";




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
    title: "SWING GATE",
    fullText: `Swing gate openers are designed for large-sized Swing gates, and such a system is highly reliable. Due to their great weight, Swing gates require a heavy-duty opener appropriate for their dimensions. This type of mechanism opens both gates simultaneously, which is very conve- nient and time-saving. Another strength of dual gate openers 
    is their versatility. You can use them to open a single gate as well, Your looking for new openers for your villa gate or your factory gate, or you facing issues with your existing Automatic gate system. The material and performance of outdoor swing gates and openers must be built to resist a variety of working circumstances, including rain, wind, cold, and heat. The use of high-quality, low-maintenance materials ensures the lifetime and trouble-free operation of our openers, which is something we aim for. Our outdoor gate openers are always designed to blend in with your gate for a fashionable, modern appearance.`,
    shortText: `Swing gate openers are designed for large-sized Swing gates, and such a system is highly reliable...`,
  },
  {
    img: aboutimg2,
    title: "SLIDING GATE",
    fullText: `Sliding gate openers are the most common and convenient solution for driveway gates. You can safely park your car close to the gates, without exposing the vehicle to the risk of being hit. This is because sliding gates open sidewards, leaving more 
    room on your driveway. Besides, sliding gates are more secure and more difficult to force open. We have professional technical team for New Automatic gates installations and maintenance of 
    automatic gates.`,

    features:[
        " Reverse Motion",
"Easy Installation",
"Low Maintenance",
"Superior Strength",
"Guide Rail/Roller",
"Precision Bearings",
"Photocell Safety Beams",
"Safety Loop Detectors",
"Force Limitation Safety",
"Drive Gear Motor",
    ],

    shortText: `Sliding gate openers are the most common and convenient solution for driveway gates...`,
  },
  {
    img: aboutimg3,
    title: "SHUTTER GATE",
    fullText: `The shutter is an access door or entrance door for storage application or perimeter building security. The shutters come with different versions of drive units with push button controls and crank override. Various kind of rolling shutter including horizontal sliding, fire rated, and insulated shutters are supplied in various styles and designs. The major advantage of installing roller shutter is security from intruders. Rolling shutters are hard to remove as 
    they are closely fitted and cannot be removed away easily.`,
    shortText: `The shutter is an access door or entrance door for storage..`,
  },
  {
    img: aboutimg4,
    title: "GLASS-DOOR GATE",
    fullText: `Sliding glass doors are a great, space-saving option for your backyard, 
    patio or deck. They slide open while staying flush with your wall, so you can gain 
    quick access to the outdoors, even in tight spaces. Sliding glass doors can be a beautiful home addition for you and your family. There are many benefits to installing these aesthetically pleasing doors in the home. They maximize natural lighting, increase airflow, 
    and facilitate the flow of traffic to and from the house.`,
    shortText: `Sliding glass doors are a great, space-saving option for your backyard...`,
  },
  {
    img: aboutimg5,
    title: "SECTIONAL GATES",
    fullText: `With Ocean Waves Security System, you can rest assured knowing that your purchase is backed by 
    experienced professionals. Our extensive selection of overhead sectional
     doors provides you with the perfect fit for your needs.`,
    shortText: `With Ocean Waves Security System, you can rest assured knowing that your purchase is backed...`,
  },
];

function Gates() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

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
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    // height:"200px",
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
            fontSize:{xs:20,sm:35,md:40},
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(165, 159, 159, 0.8)",
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
          sx={{ fontWeight: "bold", mb: 3, textAlign: "center",color:"#000" }}
        >
          Our Products
        </Typography>

        
      </Box>

      {/* About Sections */}
      {aboutSections.map((section, index) => (
        <Box
          key={index}
          sx={{
            pt: { xs: 8, md: 10 },
            pb: { xs: 5, md: 10 },
            px: 2,
            mx:{xs:0,md:8},
            mt: 6,
            minHeight: { xs: "auto", md: "400px" },
            bgcolor: "#ece2e6ff",
            border:"5px solid #8a878aff"
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
                    height: {xs:"150px",sm:"200px",md:"350px"},
                    border:"3px solid black"
                  }}
                />
              </ImgContainer>

              <Box>
                <Typography
                  sx={{
                    fontSize: "35px",
                    color: "black",
                    fontWeight: "700",
                    my: {xs:0.5,sm:1,md:2},
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "18px", color: "black", lineHeight: "27px" }}
                >
                  {isSmallScreen 
                    ? showMoreStates[index]
                        ?section.fullText
                        : section.shortText
                        : section.fullText}
                </Typography>

                {isSmallScreen && (
                  <Button
                    onClick={() => toggleShowMore(index)}
                    sx={{ mt: 2 }}
                  >
                    {showMoreStates[index] ? "Show Less" : "Read More"}
                  </Button>
                )}
              </Box>
            </CustomBox>
          </Container>
        </Box>
      ))}


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

export default Gates;

