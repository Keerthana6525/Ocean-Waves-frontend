import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Example images
import img1 from "../assets/office-1.jpg";
import img2 from "../assets/office-2.jpg";
import img3 from "../assets/office-3.jpg";
import img4 from "../assets/office-4.jpg";
import img5 from "../assets/office-5.jpg";
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


const offics = [
  { src: img1, name: "Product 1" },
  { src: img2, name: "Product 2" },
  { src: img3, name: "Product 3" },
  { src: img4, name: "Product 4" },
  { src: img5, name: "Product 5" },
  { src: img7, name: "Product 6" },
  { src: img8, name: "Product 7" },
  { src: img9, name: "Product 8" },
  { src: img10, name: "Product 9" },
  { src: img11, name: "Product 10" },
  { src: img12, name: "Product 11" },
  { src: img13, name: "Product 12" },
  { src: img14, name: "Product 13" },
  { src: img15, name: "Product 14" },
  { src: img16, name: "Product 15" },

  
];

function Officeequp() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#000"
          gutterBottom
          sx={{ textAlign: "center",fontFamily:"sans-serif",fontSize:{xs:25,sm:30,md:40} }}
        
        >
          OFFICE EQUIPMENTS & COMPUTERS
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
          {offics.map((offic, index) => (
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
                  src={offic.src}
                  alt={offic.name}
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
                  {offic.name}
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
                              component="a"
                             href={`https://wa.me/7150580529?text=Hi, I'm intrested in ${offic.name}`}
                              target="_blank"
                              rel="noopener norefferrer"
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

export default Officeequp;
