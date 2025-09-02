// import React from "react";
// import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

// import img1 from "../assets/UL.webp";
// import img2 from "../assets/iso_27001.png";
// import img3 from "../assets/iso-9901.webp";
// import img4 from "../assets/cyber.webp";


// import img8 from "../assets/group.jpeg";
// import img9 from "../assets/smiiles.png";
// import img10 from "../assets/product.png";
// import img11 from "../assets/brand.png";


// const logos = [img1, img2, img3, img4];
// const logoLabels = [
//   "ISO 27001+ Certified",
//   "ISO 27001+ Certified",
//   "ISO 27001+ Certified",
//   "ISO 27001+ Certified",

// ];

// const achievementCards = [
//   { img: img8, number:"25+",label:"TRAINED EXPERTS" },
//   { img: img9, number:"5000+",label:"HAPPY CUSTOMERS" },
//   { img: img10, number: "8000+",label:"PRODUCTS" },
//   { img: img11, number: "50+",label:"BRANDS" },

// ];

// function Achievements() {
//   return (
//     <>
//       {/* Logos */}
     

//             <Box
//         sx={{
//           bgcolor: "#f8f7f7ff",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: { sm: 4, md: 6, lg: 10 },
//           px: 2,
//           py: 4,
        
//         }}
//       >
//         {logos.map((src, index) => (
//           <Box
//             key={index}
//             sx={{
//               flex: "1 1 130px",
//               maxWidth: 180,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "center"
//             }}
//           >
//             <Box
//               component="img"
//               src={src}
//               alt={logoLabels[index]}
//               sx={{
//                 width: "100%",
//                 maxHeight: { xs: 60, sm: 80, md: 100 },
//                 objectFit: "contain"
//               }}
//             />
//             <Typography
//               variant="body2"
//               sx={{
//                 mt: 1,
//                 fontSize: { xs: "0.75rem", sm: "0.9rem" }
//               }}
//             >
//               {logoLabels[index]}
//             </Typography>
//           </Box>
//         ))}
//       </Box>


//       {/* Achievement cards */}
//       <Box sx={{ px: 2, py: 4,bgcolor: "#fff"}}>
//         <Grid
//           container
//           spacing={4}
//           justifyContent="center"
//           alignItems="stretch"
          
//         >
//           {achievementCards.map((item, index) => (
//             <Grid
//               key={index}
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               sx={{
//                 display: "flex"
//               }}
//             >
//               <Card
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "flex-start",
//                   width: 300,
//                   minHeight: 190,
//                   boxShadow: 3,
//                   gap: 3,
//                   borderRadius:'15px'
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item.img}
//                   alt={`Achievement ${index + 1}`}
//                   sx={{
//                     height: 120,
//                     width: 120,
//                     objectFit: "contain",
//                     flexShrink: 0,
//                     marginLeft:1,
//                   }}
//                 />
//                 <CardContent>
//                     <Typography
//                         variant="h6"
//                     sx={{
//                         fontWeight:'bold',
//                         fontSize:'2.2rem',
//                         lineHeight:2,
//                         color:"black"
//                     }}
//                     >{item.number}</Typography>
//                     <Typography
//                         variant="body1"
//                         sx={{ fontSize: "1.1rem",fontWeight:600, color:'#4A6B4A' }}
//                     >
//                         {item.label}
//                     </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default Achievements;

import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

import img1 from "../assets/UL.webp";
import img2 from "../assets/iso_27001.png";
import img3 from "../assets/iso-9901.webp";
import img4 from "../assets/cyber.webp";

import img8 from "../assets/group.jpeg";
import img9 from "../assets/smiiles.png";
import img10 from "../assets/product.png";
import img11 from "../assets/brand.png";

const logos = [img1, img2, img3, img4];
const logoLabels = [
  "UL Certified",
  "ISO 27001 Certified",
  "ISO 9001 Certified",
  "Cybersecurity Certified",
];

const achievementCards = [
  { img: img8, number: "25+", label: "TRAINED EXPERTS" },
  { img: img9, number: "5000+", label: "HAPPY CUSTOMERS" },
  { img: img10, number: "8000+", label: "PRODUCTS" },
  { img: img11, number: "50+", label: "BRANDS" },
];

function Achievements() {
  return (
    <>
      {/* Logos in Grid */}
      <Box sx={{ bgcolor: "#f8f7f7ff", px: 2, py: 8 }}>
        <Grid
          container
          spacing={{xs:3,sm:6,md:10}}
          justifyContent="center"
          alignItems="center"
        >
          {logos.map((src, index) => (
            <Grid
              item
              key={index}
              xs={6}
              sm={4}
              md={3}
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", p:{xs:1,sm:2,md:3} }}
            >
              <Box
                component="img"
                src={src}
                alt={logoLabels[index]}
                sx={{
                  width: "100%",
                  maxHeight: { xs: 130, sm: 150, md: 180 },
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  mt: 3,
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  fontWeight:600,
                  textAlign: "center",
                }}
              >
                {logoLabels[index]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Achievement cards */}
      <Box sx={{ px: 2, py: 4, bgcolor: "#fff" }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {achievementCards.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: 300,
                  minHeight: 190,
                  boxShadow: 3,
                  gap: 3,
                  borderRadius: "15px",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={`Achievement ${index + 1}`}
                  sx={{
                    height: 120,
                    width: 120,
                    objectFit: "contain",
                    flexShrink: 0,
                    marginLeft: 1,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "2.2rem",
                      lineHeight: 2,
                      color: "black",
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#4A6B4A",
                    }}
                  >
                    {item.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Achievements;
