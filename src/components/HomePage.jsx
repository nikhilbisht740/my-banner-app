// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const banners = [
//   { id: 1, imageUrl: "/images/banner1.jpg", title: "Summer BBQ" },
//   { id: 2, imageUrl: "/images/banner2.jpg", title: "Cozy Winter" },
//   { id: 3, imageUrl: "/images/banner3.jpg", title: "Spring Picnic" },
//   { id: 4, imageUrl: "/images/banner4.jpg", title: "Autumn Harvest" },
//   { id: 5, imageUrl: "/images/banner6.jpg", title: "Festive Celebration" },
//   //   { id: 6, imageUrl: "/images/banner6.jpg", title: "Beach Party" },
// ];

// const HomePage = () => {
//   return (
//     <Box sx={{ maxWidth: "1200px", margin: "auto", padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Select a Banner to Edit
//       </Typography>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//         }}
//       >
//         {banners.map((banner) => (
//           <SwiperSlide key={banner.id}>
//             <Box
//               sx={{
//                 position: "relative",
//                 height: "200px",
//                 cursor: "pointer",
//                 "&:hover": {
//                   opacity: 0.8,
//                 },
//               }}
//             >
//               <Link
//                 href={{
//                   pathname: "/pages",
//                   query: { id: banner.id },
//                 }}
//               >
//                 <Image
//                   src={banner.imageUrl}
//                   alt={banner.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </Link>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   bgcolor: "rgba(0,0,0,0.5)",
//                   color: "white",
//                   padding: 1,
//                 }}
//               >
//                 {banner.title}
//               </Typography>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default HomePage;

import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";

const banners = [
  { id: 1, imageUrl: "/images/banner1.jpg", title: "Summer BBQ" },
  { id: 2, imageUrl: "/images/banner2.jpg", title: "Cozy Winter" },
  { id: 3, imageUrl: "/images/banner3.jpg", title: "Spring Picnic" },
  { id: 4, imageUrl: "/images/banner4.jpg", title: "Autumn Harvest" },
  { id: 5, imageUrl: "/images/banner6.jpg", title: "Festive Celebration" },
  { id: 6, imageUrl: "/images/banner7.jpg", title: "Festive Celebration" },
  { id: 7, imageUrl: "/images/banner8.jpg", title: "Festive Celebration" },
];

const HomePage = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        padding: 4,
        textAlign: "center", // Center the slider
      }}
    >
      <Typography variant="h4" gutterBottom>
        Select a Banner to Edit
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4} // Display four images
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Box
              sx={{
                position: "relative",
                height: "200px",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              <Link
                href={{
                  pathname: "/pages",
                  query: { id: banner.id },
                }}
              >
                <Image
                  src={banner.imageUrl}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Link>

              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "rgba(0,0,0,0.5)",
                  color: "white",
                  padding: 1,
                }}
              >
                {banner.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HomePage;
