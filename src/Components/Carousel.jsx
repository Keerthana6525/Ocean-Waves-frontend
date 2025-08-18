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
// import officeImg from "../assets/office-banner.jpg";


// const images = [
//   { src: cctvImg, title: "PROVIDING THE BEST CCTV SECURITY"},
//   { src: networkImg, title: "SEAMLESS CONNECTIVITY"},
//   { src: gateImg},
//   { src: doorImg, title: "ENHANCING SECURITY AND EFFICIENCY" },
//   { src: porchImg, title: "GRACEFUL ENTRANCES, SECURE SPACES" },
//   { src: officeImg }

// ];

// // Custom Arrows
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
//         zIndex: 1,
//       }}
//     >
//       <ArrowForwardIos />
//     </IconButton>
//   );
// }

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
//         zIndex: 1,
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
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
    
//   };


//   return (
//     <div className="carousel-banner" style={{ width: "100%",height:"550px", marginTop:'100px'}}>
//       <Slider {...settings} style = {{margin:0, padding:0, height:"550px"}}>
//         {images.map((slide, index) => (
//           <div key={index} >
//             <div style={{ position: "relative", width: "100%", height: "550px",background: "lightgray", }}>
//               <img
//                 src={slide.src}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
                    
//                 }}
//               />
              

//               {/* Text */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   textAlign: "center",
//                   color: "#060606ff",
//                   padding: "0 20px",
//                 }}
//               >
//                 <h1 style={{ fontSize: "5vw", margin: 0, padding:0 }}>{slide.title}</h1>
                
//               </div>
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
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Opacity } from "@mui/icons-material";

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
    style: {
      color: "black",
      top: "20%",
      left: "5%",
      fontSize: "2.5rem",
      textAlign: "left"
    },
  },
  {
    src: networkImg,
    title: "SEAMLESS CONNECTIVITY",
    style: {
      color: "#ffff",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "2.8rem",
      textAlign: "center",
      Opacity:'0.8'
    },
  },
  {
    src: gateImg,
    title: "SECURE GATEWAYS",
    style: {
      color: "#080909ff",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "2.8rem",
      textAlign: "center"
    },
  },
  {
    src: doorImg,
    title: "ENHANCING SECURITY AND EFFICIENCY",
    style: {
      color: "black",
      top: "20%",
      right: "8%",
      fontSize: "2.5rem",
      textAlign: "right"
    },
  },
  {
    src: porchImg,
    title: "GRACEFUL ENTRANCES, SECURE SPACES",
    style: {
      color: "black",
      top: "30%",
      left: "26%",
      fontSize: "2.5rem",
      textAlign: "center"
    },
  },
  {
    src: officeImg,
    title: "SAFE OFFICE ENVIRONMENTS",
    style: {
      color: "#000",
      top: "30%",
      left: "47%",
      transform: "translate(-50%, -50%)",
      fontSize: "2.8rem",
      textAlign: "center"
    },
  },
];

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
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
        zIndex: 1,
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
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
        zIndex: 1,
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-banner" style={{ width: "100%", height: "550px", marginTop: "100px" }}>
      <Slider {...settings} style={{ margin: 0, padding: 0, height: "550px" }}>
        {images.map((slide, index) => (
          <div key={index}>
            <div style={{ position: "relative", width: "100%", height: "550px", background: "lightgray" }}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Title - dynamic style per slide */}
              {slide.title && (
                <h1
                  style={{
                    position: "absolute",
                    margin: 0,
                    padding: 0,
                    ...slide.style, // apply unique styles from array
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
