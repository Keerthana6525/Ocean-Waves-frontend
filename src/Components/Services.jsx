// // import React from 'react';
// // import { Box, Button, Divider, Grid, Typography } from '@mui/material';


// // import Image1 from '../assets/cctv-ser.jpg';
// // import Image2 from '../assets/gate-ser.jpg';
// // import Image3 from '../assets/door-acess-finger.jpg';
// // import Image4 from '../assets/car-proches-ser.jpg';
// // import Image5 from '../assets/networks-ser.jpg';
// // import Image6 from '../assets/office-ser.jpg';

// // const images = [
// //   { src: Image1, 
// //     title: "CCTV Security System",
// //     description:'CCTV CAMERAS provides high security for your bussiness and Home. Premises with advanced CCTV and Access Control System in Dubai,UAE.'
// //    },
// //   { src: Image2, title: "Network Surveillance",
// //     description:'Network Surveillance services ensure the optimal performance,security and reliability of digital networks.'
// //    },
// //   { src: Image3, title: "Door Access & Attendance System",
// //     description:'Door access and Attendence Register System are integral components of modern security and workforce management'
// //    },
// //   { src: Image4, title: "Swing & Sliding Gate",
// //     description:'Swing Gate Openers are designed for large-sized swing gates.Such system are highly reliable.'
// //    },
// //   { src: Image5, title: "Tend & Car Porch",
// //     description:'Offers Top-Notch car porch services. Specializing in cleaning,maintenance and space optimization.'
// //    },
// //   { src: Image6, title: "Office Equipments And Computers",
// //     description:'The key to leveraging information to your advantage is purchasing and implementing the right computers and software for your business.'
// //    },
// // ];


// // function Services() {
// //   return (
// //     <Box sx={{  py: 10, px: 2 }}>
// //       {/* Section Header */}
// //       <Typography
// //         variant="h3"
// //         align="center"
// //         fontWeight="bold"
// //         color='#000'
// //         gutterBottom
// //         sx={{ fontSize: { xs: 28, sm: 36, md: 48 } }}
// //       >
// //         SERVICES
// //       </Typography>
      
// //       {/* Image Cards */}
// //       <Grid container spacing={4} justifyContent="center">
// //         {images.map((item, index) => (
// //           <Grid item key={index} xs={12} sm={6} md={4} sx={{width:'400px'}}>
// //             <Box
// //               sx={{
// //                 position: 'relative',
// //                 width: '100%',
// //                 maxWidth: '400px',
// //                 height: '500px',
// //                 borderRadius: 5,
// //                 overflow: 'hidden',
// //                 boxShadow: 3,
// //                 mx: 'auto',
// //                 '&:hover .hoverOverlay': {
// //                   opacity: 1,
// //                   transform: 'translateY(0)',
// //                 }
// //               }}
// //             >
// //               {/* Image */}
// //               <Box
// //                 component="img"
// //                 src={item.src}
// //                 alt={item.title}
// //                 sx={{
// //                   width: '100%',
// //                   height: '100%',
// //                   objectFit: 'cover',
// //                   display: 'block',
// //                   borderRadius: '10px',
// //                 }}
// //               />

// //               {/* Gradient Overlay */}
// //               <Box
// //                 sx={{
// //                   position: 'absolute',
// //                   top: 0,
// //                   left: 0,
// //                   width: '100%',
// //                   height: '100%',
// //                   background:
// //                     'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
// //                 }}
// //               />

// //               {/* Text Overlay */}
// //               <Box
// //                 sx={{
// //                   position: 'absolute',
// //                   bottom: 0,
// //                   left: 0,
// //                   width: '100%',
// //                   color: '#fff',
// //                   textAlign: 'center',
// //                   p: 2,
// //                   zIndex: 1,
// //                 }}
// //               >
// //                 <Typography
// //                   variant="h5"
// //                   sx={{
// //                     px: 2,
// //                     py: 0.5,
// //                     fontWeight: 600,
// //                     fontSize: 30,
// //                   }}
// //                 >
// //                   {item.title}
// //                 </Typography>

// //                   {/* Hover Description */}
// //               <Box
// //                 className="hoverOverlay"
// //                 sx={{
// //                   position: 'absolute',
// //                   bottom: 0,
// //                   left: 0,
// //                   width: '100%',
// //                   height: '100%',
// //                   bgcolor: 'rgba(0,0,0,0.7)',
// //                   color: '#fff',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   textAlign: 'center',
// //                   px: 3,
// //                   py: 2,
// //                   borderRadius: '10px',
// //                   opacity: 0,
// //                   transform: 'translateY(20%)',
// //                   transition: 'all 0.4s ease',
// //                 }}
// //               >
// //                 <Typography variant="h5">{item.description}</Typography>
// //               </Box>

                
// //               </Box>
// //             </Box>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // }

// // export default Services;


// import React from 'react';
// import { Box, Grid, Typography } from '@mui/material';

// import Image1 from '../assets/cctv-ser.jpg';
// import Image2 from '../assets/gate-ser.jpg';
// import Image3 from '../assets/door-acess-finger.jpg';
// import Image4 from '../assets/car-proches-ser.jpg';
// import Image5 from '../assets/networks-ser.jpg';
// import Image6 from '../assets/office-ser.jpg';

// const images = [
//   {
//     src: Image1,
//     title: "CCTV Security System",
//     description: 'CCTV CAMERAS provides high security for your business and Home. Premises with advanced CCTV and Access Control System in Dubai, UAE.'
//   },
//   {
//     src: Image2,
//     title: "Network Surveillance",
//     description: 'Network Surveillance services ensure the optimal performance, security and reliability of digital networks.'
//   },
//   {
//     src: Image3,
//     title: "Door Access & Attendance System",
//     description: 'Door access and Attendance Register System are integral components of modern security and workforce management.'
//   },
//   {
//     src: Image4,
//     title: "Swing & Sliding Gate",
//     description: 'Swing Gate Openers are designed for large-sized swing gates. Such systems are highly reliable.'
//   },
//   {
//     src: Image5,
//     title: "Tend & Car Porch",
//     description: 'Offers Top-Notch car porch services. Specializing in cleaning, maintenance and space optimization.'
//   },
//   {
//     src: Image6,
//     title: "Office Equipments And Computers",
//     description: 'The key to leveraging information to your advantage is purchasing and implementing the right computers and software for your business.'
//   },
// ];

// function Services() {
//   return (
//     <Box sx={{ py: 10, px: 2 }}>
//       {/* Section Header */}
//       <Typography
//         variant="h3"
//         align="center"
//         fontWeight="bold"
//         color='#000'
//         gutterBottom
//         sx={{ fontSize: { xs: 28, sm: 36, md: 48 } }}
//       >
//         SERVICES
//       </Typography>

//       {/* Image Cards */}
//       <Grid container spacing={4} justifyContent="center">
//         {images.map((item, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4} sx={{ width: '400px' }}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 width: '100%',
//                 maxWidth: '400px',
//                 height: '500px',
//                 borderRadius: 5,
//                 overflow: 'hidden',
//                 boxShadow: 3,
//                 mx: 'auto',
//                 cursor: 'pointer',
//                 '&:hover .image': { opacity: 0.3, transform: 'scale(1.05)' },
//                 '&:hover .hoverOverlay': { opacity: 1, transform: 'translateY(0)' },
//               }}
//             >
//               {/* Image */}
//               <Box
//                 component="img"
//                 src={item.src}
//                 alt={item.title}
//                 className="image"
//                 sx={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   borderRadius: '10px',
//                   transition: 'all 0.5s ease',
//                 }}
//               />

//               {/* Hover Description */}
//               <Box
//                 className="hoverOverlay"
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   textAlign: 'center',
//                   px: 3,
//                   color: '#fff',
//                   fontWeight: 500,
//                   opacity: 0,
//                   transform: 'translateY(20%)',
//                   transition: 'all 0.5s ease',
//                 }}
//               >
//                 <Typography variant="h6">{item.description}</Typography>
//               </Box>

//               {/* Title (always visible) */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: 10,
//                   left: 0,
//                   width: '100%',
//                   textAlign: 'center',
//                   color: '#fff',
//                   zIndex: 2,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{ fontWeight: 600, textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}
//                 >
//                   {item.title}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default Services;


import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import Image1 from '../assets/cctv-ser.jpg';
import Image2 from '../assets/gate-ser.jpg';
import Image3 from '../assets/door-acess-finger.jpg';
import Image4 from '../assets/car-proches-ser.jpg';
import Image5 from '../assets/networks-ser.jpg';
import Image6 from '../assets/office-ser.jpg';

const images = [
  {
    src: Image1,
    title: "CCTV SECURITY SYSTEM",
    description: 'CCTV CAMERAS provides high security for your business and Home. Premises with advanced CCTV and Access Control System in Dubai, UAE.'
  },
  {
    src: Image5,
    title: "NETWORK SUEVEILLANCE",
    description: 'Network Surveillance services ensure the optimal performance, security and reliability of digital networks.'
  },
  {
    src: Image3,
    title: "DOOR ACCESS & ATTENDANCE SYSTEM",
    description: 'Door access and Attendance Register System are integral components of modern security and workforce management.'
  },
  {
    src: Image2,
    title: "SWING & SLIDING GATE ",
    description: 'Swing Gate Openers are designed for large-sized swing gates. Such systems are highly reliable.'
  },
  {
    src: Image4,
    title: "TEND & CAR PORCH",
    description: 'Offers Top-Notch car porch services. Specializing in cleaning, maintenance and space optimization.'
  },
  {
    src: Image6,
    title: "OFFICE EQUIPMENTS & COMPUTERS",
    description: 'The key to leveraging information to your advantage is purchasing and implementing the right computers and software for your business.'
  },
];

function Services() {
  return (
    <Box sx={{ py: 10, px: 2,backgroundColor:'#f1f6f3ff' }}>
      {/* Section Header */}
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        color='#000'
        padding={3}
        // gutterBottom
        sx={{ fontSize: { xs: 28, sm: 36, md: 48 } }}
      >
        SERVICES
      </Typography>

      {/* Image Cards */}
      <Grid container spacing={4} justifyContent="center">
        {images.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{ width: '400px' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                height: '500px',
                borderRadius: 5,
                overflow: 'hidden',
                boxShadow: 4,
                mx: 'auto',
                cursor: 'pointer',
                '&:hover .image': { opacity: 0.3, transform: 'scale(1.05)' },
                '&:hover .hoverOverlay': { opacity: 1, transform: 'translateY(0)' },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={item.src}
                alt={item.title}
                className="image"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  transition: 'all 0.5s ease',
                }}
              />

              {/* Hover Overlay with Title + Description */}
              <Box
                className="hoverOverlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#000',
                  opacity: 0,
                  transform: 'translateY(20%)',
                  transition: 'all 0.5s ease',

                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  {item.title}
                </Typography>
                {/* <Divider sx={{ bgcolor: '#000', my: 2 }} /> */}
                
                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: 320,
                    fontSize: 18,
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
