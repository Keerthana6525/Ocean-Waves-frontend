
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import productimg from "../assets/workplace-.jpg";

/* ---------------- CCTV PRODUCTS ---------------- */
import cctv1 from "../assets/pd-1.jpeg";
import cctv2 from "../assets/pd-2.jpeg";
import cctv3 from "../assets/pd-3.png";
import cctv4 from "../assets/pd-4.jpeg";
import cctv5 from "../assets/cctv-ser.jpg";


const products = [
  { src: cctv1, name: "CCTV 1" },
  { src: cctv2, name: "CCTV 2" },
  { src: cctv3, name: "CCTV 3" },
  { src: cctv4, name: "CCTV 4" },
  { src: cctv5, name: "CCTV 5" },
  
];

/* ---------------- NETWORKING ---------------- */
import acc1 from "../assets/acc-1.jpeg";
import acc2 from "../assets/acc-2.jpeg";
import acc3 from "../assets/acc-3.jpg";
import acc4 from "../assets/acc-4.jpg";
import acc5 from "../assets/acc-5.jpg";

const network = [
  { src: acc1, name: "Accessory 1" },
  { src: acc2, name: "Accessory 2" },
  { src: acc3, name: "Accessory 3" },
  { src: acc4, name: "Accessory 4" },
  { src: acc5, name: "Accessory 5" },
  
];

/* ---------------- Door ---------------- */
import door1 from "../assets/door-1.jpg";
import door2 from "../assets/door-5.jpg";
import door3 from "../assets/door-3.jpg";
import door4 from "../assets/door-4.jpg";
import door5 from "../assets/door-2.jpg";
import door6 from "../assets/door-6.jpg";

const door = [
  { src: door1, name: "door 1" },
  { src: door2, name: "door 2" },
  { src: door3, name: "door 3" },
  { src: door4, name: "door 4" },
  { src: door5, name: "door 5" },
  { src: door6, name: "door 6" },

];

/* ---------------- OFFICE EQUIPMENTS ---------------- */
import office1 from "../assets/office-1.jpg";
import office2 from "../assets/office-2.jpg";
import office3 from "../assets/office-3.jpg";
import office4 from "../assets/office-4.jpg";
import office5 from "../assets/office-5.jpg";
import office7 from "../assets/office-7.jpg";
import office8 from "../assets/office-8.jpg";
import office9 from "../assets/office-9.jpg";
import office10 from "../assets/office-10.jpg";
import office11 from "../assets/office-11.jpg";
import office12 from "../assets/office-12.jpg";
import office13 from "../assets/office-13.jpg";
import office14 from "../assets/office-14.jpg";
import office15 from "../assets/office-15.jpg";
import office16 from "../assets/office-16.jpg";

const offics = [
  { src: office1, name: "Office 1" },
  { src: office2, name: "Office 2" },
  { src: office3, name: "Office 3" },
  { src: office4, name: "Office 4" },
  { src: office5, name: "Office 5" },
  { src: office7, name: "Office 6" },
  { src: office8, name: "Office 7" },
  { src: office9, name: "Office 8" },
  { src: office10, name: "Office 9" },
  { src: office11, name: "Office 10" },
  { src: office12, name: "Office 11" },
  { src: office13, name: "Office 12" },
  { src: office14, name: "Office 13" },
  { src: office15, name: "Office 14" },
  { src: office16, name: "Office 15" },
];

/* ---------------- COMPONENT ---------------- */
function Products() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: {sm:0 , md:3} }}>
      <Box>
        {/* Banner */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 200, md: 200 },
            mb: 6,
            backgroundColor: "#fff",
          }}
        >
          <img
            src={productimg}
            alt="Contact Banner"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#000",
            }}
          >
            <Typography
              
              sx={{
                fontWeight: "bold",
                fontFamily:"sans-serif",
                fontSize:{xs:40,sm:60,md:80},
                pt: {xs:6,sm:6,md:5},
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              }}
            >
               PRODUCTS
            </Typography>
            <Typography variant="h6" 
              sx={{display:{xs:'none', sm:'none', md:'block'}}}
            >
              Explore our diverse catalog across CCTV, Office equipments and
              Biometrics Accessories.
            </Typography>
          </Box>
        </Box>

        {/* CCTV Section */}
        <Box sx={{ p: { xs: 2, sm: 3, md: 7 }, boxShadow: 5, backgroundColor: "#fff", mb: 4 }}>
          <Typography fontWeight={"bold"} sx={{mb:{xs:1,sm:2} ,textAlign:"center",fontSize:{xs:15,sm:25,md:35}}}>
            CCTV SYSTEM
          </Typography>
          <ProductCarousel items={products} />
        </Box>

        {/* Office Section */}
        <Box sx={{ p: { xs: 2, sm: 3, md: 7 }, boxShadow: 5, backgroundColor: "#fff", mb: 4 }}>
          <Typography fontWeight={"bold"} sx={{mb:{xs:1,sm:2},textAlign:"center",fontSize:{xs:15,sm:25,md:35}}}>
            OFFICE EQUIPMENTS & COMPUTERS
          </Typography>
          <ProductCarousel items={offics} />
        </Box>

        {/* Network Section */}
        <Box sx={{ p: { xs: 2, sm: 3, md: 7 }, boxShadow: 5, backgroundColor: "#fff" }}>
          <Typography fontWeight={"bold"} sx={{mb:{xs:1,sm:2},textAlign:"center",fontSize:{xs:15,sm:25,md:35}}}>
            NETWORK SOLUTIONS
          </Typography>
          <ProductCarousel items={network} />
        </Box>

        {/* Door Section */}
        <Box sx={{ p: { xs: 2, sm: 3, md: 7 }, boxShadow: 5, backgroundColor: "#fff" }}>
          <Typography fontWeight={"bold"} sx={{mb:{xs:1,sm:2} ,textAlign:"center",fontSize:{xs:15,sm:25,md:35}}}>
            DOOR ACCESS & BIOMETRIC ATTENDANCE REGISTER
          </Typography>
          <ProductCarousel items={door} />
        </Box>
      </Box>
    </Box>
  );
}

/* ---------------- REUSABLE CAROUSEL COMPONENT ---------------- */
function ProductCarousel({ items }) {
  return (
    <Box sx={{px:0}}>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={3}
      slidesPerGroup={1}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        600: { slidesPerView: 2, slidesPerGroup: 1 },
        900: { slidesPerView: 3, slidesPerGroup: 1 },
      }}
      style={{ padding: "10px 0" }}
    >
      {items.map((item, index) => (
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
            <Box
              component="img"
              src={item.src}
              alt={item.name}
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: 1,
              }}
            />
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
              {item.name}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#4A6B4A",
                "&:hover": { bgcolor: "#278127ff" },
              }}
              fullWidth
              component="a"
              href={`https://wa.me/7150580529?text=Hi, I'm intrested in ${item.name}`}
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
  );
}

export default Products;
