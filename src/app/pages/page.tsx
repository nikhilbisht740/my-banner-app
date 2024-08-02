"use client";

import { usePathname, useSearchParams } from "next/navigation";
import BannerEditor from "@/components/BannerEditor";
// import { log } from "console";

const banners = [
  { id: 1, imageUrl: "/images/banner1.jpg", title: "Summer BBQ" },
  { id: 2, imageUrl: "/images//banner2.jpg", title: "Cozy Winter" },
  { id: 3, imageUrl: "/images//banner3.jpg", title: "Spring Picnic" },
  { id: 4, imageUrl: "/images//banner4.jpg", title: "Autumn Harvest" },
  { id: 5, imageUrl: "/images//banner6.jpg", title: "Festive Celebration" },
  { id: 6, imageUrl: "/images/banner7.jpg", title: "Festive Celebration" },
  { id: 7, imageUrl: "/images/banner8.jpg", title: "Festive Celebration" },
];

export default function EditBannerPage() {
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  // console.log(pathname);

  const id = searchParams.get("id");

  const banner = banners.find((b) => b.id === Number(id));

  if (!banner) {
    return <div>Banner not found</div>;
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Edit Banner{" "}
      </h1>
      <BannerEditor
        initialImageUrl={banner.imageUrl}
        initialTitle={banner.title}
      />
    </div>
  );
}
