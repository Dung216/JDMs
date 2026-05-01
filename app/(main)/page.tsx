"use client";

import Video from "next-video";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen">

      {/* VIDEO */}
      <Video
        src="/bg.mp4"
        autoPlay
        loop
        playsInline
        controls={false}
        className="w-full h-screen object-cover"
      />

      {/* TEXT */}
<div className="group absolute top-1/2 left-1/2 
  transform -translate-x-1/2 -translate-y-1/2 text-center">

  {/*rectangle */}
  <div className="relative inline-block">

    {/* RECTANGLE ĐỎ */}
    <div className="
      absolute top-2 left-2 w-full h-full 
      bg-red-600 opacity-0
      transition-all duration-500
      md:group-hover:opacity-100
    "></div>

    {/* RECTANGLE TRẮNG (chính) */}
    <div className="
      relative px-8 py-4 
      border border-white 
      bg-transparent


      transition-all duration-500

  /* CHỈ KHI HOVER MỚI CÓ NỀN + BLUR */
  md:group-hover:bg-white/100
  md:group-hover:backdrop-blur-sm

    ">
      
      {/* TEXT */}
      <h2 className="
        text-4xl md:text-6xl font-bold uppercase text-white
        whitespace-nowrap
        
        transition-all duration-500
        md:group-hover:text-black
      ">
        <Link href="/engine">Welcome to JDMs</Link>
      </h2>

    </div>
  </div>

  {/* UNDERLINE */}
  <div className="
    mt-4 h-1 bg-red-500 w-0 
    transition-all duration-500
    md:group-hover:w-full
  "></div>

</div>
      {/* CONTENT GIẢ LẬP để thấy footer */}
      <div className="h-[64px] bg-white"></div>

    </main>
  );
}