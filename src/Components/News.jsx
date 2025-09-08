// import React, { useRef } from 'react';
// import { Grid, Box, Typography } from '@mui/material';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const News = () => {
//   const sliderRef = useRef(null);
//   const handleImageLoad = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(0, true);
//     }
//   };


//   const news = [
//     { description: "Ocean Waves Security System launched a new CCTV solution for residential complexes.", date: "Aug 15, 2025" },
//     { description: "ISO certification awarded to Ocean Waves Security System.", date: "Jul 30, 2025" },
//     { description: "Partnership signed with local government for city surveillance projects.", date: "Jun 20, 2025" },
//     { description: "Ocean Waves conducted a free safety awareness workshop for schools and colleges.", date: "May 10, 2025" },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     lazyLoad: 'ondemand',
//   };

  
//   const pictures = ["/images/news5.jpg", "/images/news3.jpeg"];

//   return (
//     <Box sx={{ bgcolor: '#e5f8d6ff', py: 6 }}>
//       <Grid container spacing={4} justifyContent="center">

//         {/* Recent News & Events */}
//         <Grid item xs={12} md={4} alignItems="center">
//           <Typography
//             variant="h5"
//             sx={{ color: '#0c0c0cff', mb: 4, textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
//           >
//             RECENT NEWS & EVENTS
//           </Typography>

//           {/* <Grid justifyContent="center"> */}
//             {news.map((item, i) => (
//               <Box
//                 key={i}
//                 sx={{
//                   border: '3px solid #2c1d1dff',
//                   color: '#0a0a0aff',
//                   width: { xs: '90%', sm: '360px', md: '380px' },
//                   borderRadius: 8,
//                   m: 2,
//                   p: 2,
//                 }}
//               >
//                 <Typography variant="subtitle1" mt={1}>
//                   {item.description}
//                 </Typography>
//                 <Typography variant="body2" display="block" mt={1}>
//                   {item.date}
//                 </Typography>
//               </Box>
//             ))}
//           {/* </Grid> */}
//         </Grid>

//         {/* Announcements */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h5" sx={{ color: '#0f0f0fff', mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
//             ANNOUNCEMENTS
//           </Typography>

//           {/* <Grid justifyContent="center"> */}
//             {[
//               { text: 'Ocean Waves Security System introduces 24/7 remote monitoring service for businesses.', date: 'Mon, 01 Sep 2025' },
//               { text: 'New partnership with builders to provide smart surveillance solutions for housing projects.', date: 'Thu, 21 Aug 2025' },
//               { text: 'Annual maintenance service packages now available at discounted rates.', date: 'Sat, 09 Aug 2025' },
//               { text: 'Ocean Waves expands operations with a new branch office in Kochi.', date: 'Tue, 15 Jul 2025' },
//             ].map((item, i) => (
//               <Box
//                 key={i}
//                 sx={{
//                   border: '3px solid #2c1d1dff',
//                   color: '#0c0c0cff',
//                   width: { xs: '90%', sm: '360px', md: '380px' },
//                   borderRadius: 8,
//                   m: 2,
//                   p: 2,
//                 }}
//               >
//                 <Typography variant="subtitle1" mt={1}>{item.text}</Typography>
//                 <Typography variant="body2" display="block" mt={1}>
//                   {item.date}
//                 </Typography>
//               </Box>
//             ))}
//           {/* </Grid> */}
//         </Grid>

//         {/* News In Pictures */}
//         <Grid item xs={12} md={4}>
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: "350px",
//               height: "500px",
//               border: '1px solid #131212ff',
//               overflow: 'hidden',
//               mx: 'auto',
//               my: { xs: 2, md: 4, lg: 14 }
//             }}
//           >
//             <Slider  {...sliderSettings}>
//               {pictures.map((src, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     width: '100%',
//                     maxWidth:'350px',
//                     height: "500px",            
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={src}
//                     alt={`News ${index + 1}`}
//                     onLoad={handleImageLoad}
//                     onError={(e) => {
//                       // fallback if the image is missing/renamed
//                       e.currentTarget.src = "https://via.placeholder.com/400x500?text=Image+Not+Found";
//                     }}
//                     sx={{
//                       // width: '350px',
//                       // height: '500px',
//                       width:'100%',
//                       height:'100%',
//                       objectFit: 'cover',
//                       display: 'block'
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Slider>
//           </Box>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// };

// export default News;



import React, { useRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const sliderRef = useRef(null);
  const handleImageLoad = () => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }
  };

  const news = [
    { description: "Ocean Waves Security System launched a new CCTV solution for residential complexes.", date: "Aug 15, 2025" },
    { description: "ISO certification awarded to Ocean Waves Security System.", date: "Jul 30, 2025" },
    { description: "Partnership signed with local government for city surveillance projects.", date: "Jun 20, 2025" },
    { description: "Ocean Waves conducted a free safety awareness workshop for schools and colleges.", date: "May 10, 2025" },
  ];

  const announcements = [
    { text: 'Ocean Waves Security System introduces 24/7 remote monitoring service for businesses.', date: 'Mon, 01 Sep 2025' },
    { text: 'New partnership with builders to provide smart surveillance solutions for housing projects.', date: 'Thu, 21 Aug 2025' },
    { text: 'Annual maintenance service packages now available at discounted rates.', date: 'Sat, 09 Aug 2025' },
    { text: 'Ocean Waves expands operations with a new branch office in Kochi.', date: 'Tue, 15 Jul 2025' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    lazyLoad: 'ondemand',
  };

  const pictures = ["/images/news5.jpg", "/images/news3.jpeg"];

  return (
    <Box sx={{ bgcolor: '#e5f8d6ff', py: 6 }}>
      <Grid container spacing={4} justifyContent="center">

        {/* Recent News & Events */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{ color: '#0c0c0cff', mb: 4, textAlign: 'center', fontWeight: 'bold' }}
          >
            RECENT NEWS & EVENTS
          </Typography>

          {news.map((item, i) => (
            <Box
              key={i}
              sx={{
                border: '3px solid #2c1d1dff',
                color: '#0a0a0aff',
                borderRadius: 3,
                m: 2,
                p: 2,
              }}
            >
              <Typography variant="subtitle1" mt={1}>
                {item.description}
              </Typography>
              <Typography variant="body2" display="block" mt={1}>
                {item.date}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Announcements */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{ color: '#0f0f0fff', mb: 4, textAlign: 'center', fontWeight: 'bold' }}
          >
            ANNOUNCEMENTS
          </Typography>

          {announcements.map((item, i) => (
            <Box
              key={i}
              sx={{
                border: '3px solid #2c1d1dff',
                color: '#0c0c0cff',
                borderRadius: 3,
                m: 2,
                p: 2,
              }}
            >
              <Typography variant="subtitle1" mt={1}>{item.text}</Typography>
              <Typography variant="body2" display="block" mt={1}>
                {item.date}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* News In Pictures */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{ color: '#0c0c0cff', mb: 4, textAlign: 'center', fontWeight: 'bold' }}
          >
            NEWS IN PICTURES
          </Typography>

          <Box
            sx={{
              width: '100%',
              maxWidth: 300,
              height: 400,
              border: '1px solid #131212ff',
              overflow: 'hidden',
              mx: 'auto',
            }}
          >
            <Slider ref={sliderRef} {...sliderSettings}>
              {pictures.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '100%',
                    height: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`News ${index + 1}`}
                    onLoad={handleImageLoad}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x400?text=Image+Not+Found";
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default News;
