import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";

// Example images
import img1 from "../assets/brand-1.jpeg";
import img2 from "../assets/brand-2.jpeg";
import img3 from "../assets/brand-3.jpg";
import img4 from "../assets/brand-4.jpg";
import img5 from "../assets/brand-5.jpg";
import img6 from "../assets/brand-6.jpg";
import img7 from "../assets/brand-7.jpg";
import img8 from "../assets/brand-8.jpg";
import img9 from "../assets/brand-9.jpg";
import img10 from "../assets/brand-10.jpg";
import img11 from "../assets/brand-11.jpg";
import img12 from "../assets/brand-12.jpg";
import img13 from "../assets/brand-13.jpg";
import img14 from "../assets/brand-14.jpg";
import img16 from "../assets/brand-16.jpg";
import img17 from "../assets/brand-17.jpg";
import img18 from "../assets/brand-18.jpg";
import img19 from "../assets/brand-19.jpg";
import img20 from "../assets/brand-20.jpg";
import img21 from "../assets/brand-21.jpg";
import img22 from "../assets/brand-22.jpg";


const brands = [
  { src: img1,  },
  { src: img2,  },
  { src: img3,  },
  { src: img4,  },
  { src: img5,  },
  { src: img6,  },
  { src: img7, },
  { src: img8, },
  { src: img9,  },
  { src: img10, },
  { src: img11, },
  { src: img12, },
  { src: img13, },
  { src: img14, },
  { src: img16, },
  { src: img17, },
  { src: img18, },
  { src: img19, },
  { src: img20, },
  { src: img21, },
  { src: img22, },

];

function Brands() {
  return (
    <Box sx={{ bgcolor: "#f3efefff", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#000"
          gutterBottom
          sx={{ textAlign:"center",fontFamily:'sans-serif',fontSize:{xs:25,sm:3,md:40} }}
        
        >
          OUR BRANDS
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
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  bgcolor: "#fff",
                  overflow: "hidden",
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
                  src={brand.src}
                  alt={brand.name}
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
                  {brand.name}
                </Typography>

                
                
              </Box>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </Container>
    </Box>
  );
}

export default Brands;
