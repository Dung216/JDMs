"use client";

import React, { useRef, useState } from "react"; // Thêm useRef và useState

// Import Swiper React components và styles

import 'swiper/css';
import 'swiper/css/navigation';

export default function HomePage() {
  // 1. Khởi tạo Ref để điều khiển video và State để track trạng thái
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // 2. Hàm xử lý Bật/Tắt video
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };



  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#000000] text-white">
      {/* -------------------- SECTION 1: HERO -------------------- */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>

        <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-10 md:px-20 lg:px-32">
          {/* Thêm pr-10 để tạo không gian cho độ nghiêng của chữ 'e', và w-fit để container không bó hẹp chữ */}
          <h1 className="text-6xl md:text-7xl font-black uppercase italic tracking-tighter title-scan-effect drop-shadow-[0_5px_15px_rgba(223,37,49,0.3)] pr-10 w-fit overflow-visible">
            JDM
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl text-lg md:text-xl font-bold tracking-widest uppercase text-left">
            For a future where we no longer have to lose everything just to understand each other.
          </p>
        </div>
      </div>

      
    </main>
  );
}