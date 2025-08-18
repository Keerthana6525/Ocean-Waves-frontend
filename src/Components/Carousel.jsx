// // 
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// import cctvImg from "../assets/cctv-banner.jpg";
// import networkImg from "../assets/network-banner.jpg";
// import gateImg from "../assets/gate-banner.jpg";
// import doorImg from "../assets/door-banner.jpg";
// import porchImg from "../assets/porch-banner.jpg";
// import officeImg from "../assets/office.jpg";

// const images = [
//   {
//     src: cctvImg,
//     title: "PROVIDING THE BEST CCTV SECURITY",
//     style: {
//       color: "black",
//       top: "20%",
//       left: "5%",
//       fontSize: "2.5rem",
//       textAlign: "left",
//     },
//   },
//   {
//     src: networkImg,
//     title: "SEAMLESS CONNECTIVITY",
//     style: {
//       color: "#fff",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       fontSize: "2.8rem",
//       textAlign: "center",
//       opacity: "0.9",
//     },
//   },
//   {
//     src: gateImg,
//     title: "SECURE GATEWAYS",
//     style: {
//       color: "#080909",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       fontSize: "2.8rem",
//       textAlign: "center",
//     },
//   },
//   {
//     src: doorImg,
//     title: "ENHANCING SECURITY AND EFFICIENCY",
//     style: {
//       color: "black",
//       top: "20%",
//       right: "8%",
//       fontSize: "2.5rem",
//       textAlign: "right",
//     },
//   },
//   {
//     src: porchImg,
//     title: "GRACEFUL ENTRANCES, SECURE SPACES",
//     style: {
//       color: "black",
//       top: "30%",
//       left: "26%",
//       fontSize: "2.5rem",
//       textAlign: "center",
//     },
//   },
//   {
//     src: officeImg,
//     title: "SAFE OFFICE ENVIRONMENTS",
//     style: {
//       color: "#000",
//       top: "30%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       fontSize: "2.8rem",
//       textAlign: "center",
//     },
//   },
// ];

// // Custom Next Arrow
// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <IconButton
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         top: "50%",
//         right: "10px",
//         transform: "translateY(-50%)",
//         color: "white",
//         backgroundColor: "rgba(0,0,0,0.5)",
//         "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//         zIndex: 2,
//       }}
//     >
//       <ArrowForwardIos />
//     </IconButton>
//   );
// }

// // Custom Prev Arrow
// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <IconButton
//       onClick={onClick}
//       sx={{
//         position: "absolute",
//         top: "50%",
//         left: "10px",
//         transform: "translateY(-50%)",
//         color: "white",
//         backgroundColor: "rgba(0,0,0,0.5)",
//         "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//         zIndex: 2,
//       }}
//     >
//       <ArrowBackIos />
//     </IconButton>
//   );
// }

// function Carousel() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div
//       className="carousel-banner"
//       style={{
//         width: "100%",
//         height: "550px",
//         margin: 0,
//         paddingTop: "70px",
//         overflow: "hidden",
        
//       }}
//     >
//       <Slider {...settings} style={{ height: "100%" }}>
//         {images.map((slide, index) => (
//           <div key={index}>
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 height: "550px",
//                 background: "lightgray",
//               }}
//             >
//               <img
//                 src={slide.src}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//               {/* Title */}
//               {slide.title && (
//                 <h1
//                   style={{
//                     position: "absolute",
//                     margin: 0,
//                     padding: 0,
//                     ...slide.style,
//                   }}
//                 >
//                   {slide.title}
//                 </h1>
//               )}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Carousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import cctvImg from "../assets/cctv-banner.jpg";
import networkImg from "../assets/network-banner.jpg";
import gateImg from "../assets/gate-banner.jpg";
import doorImg from "../assets/door-banner.jpg";
import porchImg from "../assets/porch-banner.jpg";
import officeImg from "../assets/office.jpg";

const images = [
  {
    src: cctvImg,
    title: "PROVIDING THE BEST CCTV SECURITY",
    style: { color: "black", top: "20%", left: "5%", fontSize: "2.5rem", textAlign: "left" },
  },
  {
    src: networkImg,
    title: "SEAMLESS CONNECTIVITY",
    style: {
      color: "#fff",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "2.5rem",
      textAlign: "center",
      opacity: "0.9",
    },
  },
  {
    src: gateImg,
    title: "SECURE GATEWAYS",
    style: {
      color: "#080909",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "2.5rem",
      textAlign: "center",
    },
  },
  {
    src: doorImg,
    title: "ENHANCING SECURITY AND EFFICIENCY",
    style: { color: "black", top: "20%", right: "8%", fontSize: "2.5rem", textAlign: "right" },
  },
  {
    src: porchImg,
    title: "GRACEFUL ENTRANCES, SECURE SPACES",
    style: { color: "black", top: "30%", left: "10%", fontSize: "2.5rem", textAlign: "center" },
  },
  {
    src: officeImg,
    title: "SAFE OFFICE ENVIRONMENTS",
    style: {
      color: "#000",
      top: "30%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "2.5rem",
      textAlign: "center",
    },
  },
];

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        zIndex: 2,
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
}

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        zIndex: 2,
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
}

function Carousel() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      className="carousel-banner"
      style={{
        width: "100%",
        height: isMobile ? "300px" : "550px",
        margin: 0,
        paddingTop: "70px",
        overflow: "hidden",
      }}
    >
      <Slider {...settings} style={{ height: "100%" }}>
        {images.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: isMobile ? "300px" : "550px", // Mobile adjusts
                background: "lightgray",
              }}
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", //  keeps image proportion
                }}
              />
              {slide.title && (
                <h1
                  style={{
                    position: "absolute",
                    margin: 0,
                    padding: 0,
                    fontSize: isMobile ? "1.2rem" : slide.style.fontSize, //  smaller text on mobile
                    ...slide.style,
                  }}
                >
                  {slide.title}
                </h1>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
