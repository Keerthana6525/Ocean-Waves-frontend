import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";

// Example images
import img1 from "../assets/acc-1.jpeg";
import img2 from "../assets/acc-2.jpeg";
import img3 from "../assets/acc-3.jpg";
import img4 from "../assets/acc-4.jpg";
import Img5 from "../assets/acc-5.jpg";
import img6 from "../assets/acc-6.jpg";
import img7 from "../assets/acc-7.jpg";
import img8 from "../assets/acc-8.jpg";
import img9 from "../assets/acc-9.jpg";
import img10 from "../assets/acc-10.jpg";
import img11 from "../assets/acc-11.jpg";


const accessrs = [
  { src: img1, name: "Product 1" },
  { src: img2, name: "Product 2" },
  { src: img3, name: "Product 3" },
  { src: img4, name: "Product 4" },
  { src: Img5, name: "Product 5" },
  { src: img6, name: "Product 6" },
  { src: img7, name: "Product 7" },
  { src: img8, name: "Product 8" },
  { src: img9, name: "Product 9" },
  { src: img10, name: "Product 10" },
  { src: img11, name: "Product 11" },
  
];

function Accessories() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center"}}
        >
          ACCESSORIES
        </Typography>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 ,slidesPerGroup:1},
            600: { slidesPerView: 2 ,slidesPerGroup:1},
            900: { slidesPerView: 3,slidesPerGroup:1 },
          }}
          style={{ padding: "20px 0" }}
        >
          {accessrs.map((access, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  bgcolor: "#fff",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  height: "100%",
                  p: 1,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={access.src}
                  alt={access.name}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain", // leaves space instead of covering fully
                    borderRadius: 1,
                  }}
                />

                {/* Title */}
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    fontSize: "1rem",
                    color: "#333",
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  {access.name}
                </Typography>

                {/* Enquiry Button */}
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#4A6B4A",
                    "&:hover": { bgcolor: "#278127ff" },
                  }}
                  fullWidth
                >
                  Enquiry
                </Button>
              </Box>
            </SwiperSlide>
          ))}
          {/* Custom CSS for arrows */}
            <style>
                {`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #4A6B4A; /* Change arrow color */
                }
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    color: #278127ff; /* Hover color */
                }
                `}
            </style>
        </Swiper>
      </Container>
    </Box>
  );
}

export default Accessories;
