"use client";

import { Music } from "lucide-react";
import { useRef } from "react";

const cars = [
  {
    id: 1,
    title: "MAZDA RX 7 GEN 1",
    image: "/rx7.jpg",
    audio: "/brapp rx7.mp4",
    price: "150.000 USD",
  },
  {
    id: 2,
    title: "TOYOTA SUPRA MK4",
    image: "/MK4.png",
    audio: "/mk4.mp4",
    price: "150.000 USD",
  },
  {
    id: 3,
    title: "NISSAN GT-R R33",
    image: "/e33.jpg",
    audio: "/r33.mp4",
    price: "150.000 USD",
  },
  {
    id: 4,
    title: "NISSAN GT-R R34",
    image: "/R34.png",
    audio: "/r34.mp4",
    price: "150.000 USD",
  },
  {
    id: 5,
    title: "NISSAN GT-R R35",
    image: "/r35.jpg",
    audio: "/gtr r35.mp4",
    price: "150.000 USD",
  },
  {
    id: 6,
    title: "SUBARU IMPREZA WRX STI",
    image: "/STI.jpg",
    audio: "/subaruSTI.mp4",
    price: "150.000 USD",
  },
];

export default function CarUI() {
  // tạo object lưu audio
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const handleHover = (id: number) => {
    const audio = audioRefs.current[id];

    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.6;
      audio.play();
    }
  };

  const handleLeave = (id: number) => {
    const audio = audioRefs.current[id];

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cars.map((car) => (
          <div
            key={car.id}
            onMouseEnter={() => handleHover(car.id)}
            onMouseLeave={() => handleLeave(car.id)}
            className="
              group
              relative
              w-[320px]
              overflow-hidden
              rounded-[35px]
              border-2 border-white
              bg-[#111]
              p-5
              transition-all duration-500
              hover:-translate-y-4
              hover:shadow-[0_0_40px_#ff0000]
            "
          >
            {/* AUDIO */}
            <audio
              ref={(el) => {
                audioRefs.current[car.id] = el;
              }}
              src={car.audio}
              preload="auto"
            />

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[25px]">
              <img
                src={car.image}
                alt={car.title}
                className="
                  h-[320px]
                  w-full
                  object-cover
                  transition-all duration-700
                  group-hover:scale-110
                "
              />
            </div>

            {/* INFO */}
            <div className="mt-6 text-center">
              <h2
                className="
                  text-white
                  text-2xl
                  font-black
                  italic
                  transition-all duration-500
                  group-hover:text-red-500
                "
              >
                {car.title}
              </h2>

              <p className="mt-4 text-3xl font-black text-white">
                {car.price}
              </p>

              
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}