import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";

// Example images
import img1 from "../assets/products-img1.jpg";
import img2 from "../assets/products-img2.jpg";
import img3 from "../assets/products-img3.jpg";
import img4 from "../assets/products-img4.jpg";
import Img5 from "../assets/products-img5.jpeg";
import img6 from "../assets/products-img6.jpg";
import img7 from "../assets/products-img7.jpg";
import img8 from "../assets/products-img8.jpg";
import img9 from "../assets/products-img9.jpg";
import img10 from "../assets/products-img10.jpg";
import img11 from "../assets/products-img11.jpeg";


const products = [
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

function Products() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#000"
          gutterBottom
          sx={{ textAlign:"center" }}
        >
          PRODUCTS
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
          {products.map((prod, index) => (
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
                  src={prod.src}
                  alt={prod.name}
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
                  {prod.name}
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
          
        </Swiper>
      </Container>
    </Box>
  );
}

export default Products;
