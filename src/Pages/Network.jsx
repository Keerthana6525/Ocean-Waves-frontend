import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Banner Image
import bannerImg from "../assets/network-banner.jpg";

// Example Network Product Images
import img1 from "../assets/acc-1.jpeg";
import img2 from "../assets/acc-2.jpeg";
import img3 from "../assets/acc-3.jpg";
import img4 from "../assets/acc-4.jpg";
import img5 from "../assets/acc-5.jpg";

const networkProducts = [
  { src: img1, name: "Router" },
  { src: img2, name: "Switch" },
  { src: img3, name: "Firewall" },
  { src: img4, name: "Access Point" },
  { src: img5, name: "Server Rack" },
];

function Network() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", pb: 6 }}>
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
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            textAlign: "center",
          }}
        >
          Networking Solutions
        </Typography>
      </Box>

      {/* Slider Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
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
                    bgcolor: "#004080",
                    "&:hover": { bgcolor: "#0066cc" },
                  }}
                >
                  Enquiry
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Network;
