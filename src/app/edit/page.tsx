// "use client";

// import { useSearchParams } from "next/navigation";
// import BannerEditor from "@/components/BannerEditor";
// import { Suspense } from "react";

// const banners = [
//   { id: 1, imageUrl: "/images/banner1.jpg", title: "Summer BBQ" },
//   { id: 2, imageUrl: "/images//banner2.jpg", title: "Cozy Winter" },
//   { id: 3, imageUrl: "/images//banner3.jpg", title: "Spring Picnic" },
//   { id: 4, imageUrl: "/images//banner4.jpg", title: "Autumn Harvest" },
//   { id: 5, imageUrl: "/images//banner6.jpg", title: "Festive Celebration" },
//   { id: 6, imageUrl: "/images/banner7.jpg", title: "Festive Celebration" },
//   { id: 7, imageUrl: "/images/banner8.jpg", title: "Festive Celebration" },
// ];

// export default function EditBannerPage() {
//   const searchParams = useSearchParams();

//   const id = searchParams.get("id");

//   const banner = banners.find((b) => b.id === Number(id));

//   if (!banner) {
//     return <div>Banner not found</div>;
//   }

//   return (
//     <Suspense>
//       <h1
//         style={{
//           textAlign: "center",
//         }}
//       >
//         Edit Banner
//       </h1>
//       <BannerEditor
//         initialImageUrl={banner.imageUrl}
//         initialTitle={banner.title}
//       />
//     </Suspense>
//   );
// }
"use client";

import { useSearchParams } from "next/navigation";
import BannerEditor from "@/components/BannerEditor";
import { Suspense } from "react";

const banners = [
  { id: 1, imageUrl: "/imag/banner1.jpg", title: "Summer BBQ" },
  { id: 2, imageUrl: "/imag/banner2.jpg", title: "Cozy Winter" },
  { id: 3, imageUrl: "/imag/banner3.jpg", title: "Spring Picnic" },
  { id: 4, imageUrl: "/imag/banner4.jpg", title: "Autumn Harvest" },
  { id: 5, imageUrl: "/imag/banner6.jpg", title: "Festive Celebration" },
  { id: 6, imageUrl: "/imag/banner7.jpg", title: "Festive Celebration" },
  { id: 7, imageUrl: "/imag/banner8.jpg", title: "Festive Celebration" },
];

function BannerContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const banner = banners.find((b) => b.id === Number(id));

  if (!banner) {
    return <div>Banner not found</div>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Edit Banner</h1>
      <BannerEditor
        initialImageUrl={banner.imageUrl}
        initialTitle={banner.title}
      />
    </>
  );
}

export default function EditBannerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerContent />
    </Suspense>
  );
}
