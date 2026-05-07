"use client";

import Link from "next/link";
import { useRef } from "react";

const newsCars = [
  {
    id: 1,
    slug: "mazda-rx7",
    title: "MAZDA RX 7 GEN 1",
    image: "/rx7.jpg",
    desc: "Rotary legend from Japan with iconic JDM spirit.",
  },
  {
    id: 2,
    slug: "supra-mk4",
    title: "TOYOTA SUPRA MK4",
    image: "/MK4.png",
    desc: "2JZ monster dominating the street racing era.",
    
  },
  {
    id: 3,
    slug: "nissan-r33",
    title: "NISSAN GT-R R33",
    image: "/e33.jpg",
    desc: "Skyline evolution with aggressive AWD performance.",
  },
  {
    id: 4,
    slug: "nissan-r34",
    title: "NISSAN GT-R R34",
    image: "/R34.png",
    desc: "The king of modern JDM culture.",
  },
  {
    id: 5,
    slug: "nissan-r35",
    title: "NISSAN GT-R R35",
    image: "/r35.jpg",
    desc: "The king of modern JDM culture.",
  },
  {
    id: 6,
    slug: "subaru-sti",
    title: "SUBARU WRX STI",
    image: "/STI.jpg",
    desc: "The king of modern JDM culture.",
  },
  {
    id: 7,
    slug: "toyota-86",
    title: "TOYOTA GR86",
    image: "/86.jpg",
    desc: "The king of modern JDM culture.",
  },
  {
    id: 8,
    slug: "subaru-brz",
    title: "SUBARU BRZ",
    image: "/brz.jpg",
    desc: "The king of modern JDM culture.",
  },
 
];

export default function NewsPage() {
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const handleHover = (id: number) => {
    const audio = audioRefs.current[id];

    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.5;
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
    <main className="min-h-screen bg-black px-8 py-20">
      
      {/* TITLE */}
      <div className="mb-20 text-center">
        <h1 className="text-7xl font-black italic text-white uppercase">
          JDM News
        </h1>

        <div className="mx-auto mt-5 h-2 w-28 bg-red-600"></div>
      </div>

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {newsCars.map((car) => (
          <Link
            key={car.id}
            href={`/news/${car.slug}`}
            onMouseEnter={() => handleHover(car.id)}
            onMouseLeave={() => handleLeave(car.id)}
            className="
              group
              relative
              overflow-hidden
              rounded-[35px]
              border border-white/20
              bg-[#111]
              transition-all duration-500
              hover:-translate-y-4
              hover:border-red-500
              hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]
            "
          >

            {/* IMAGE */}
            <div className="relative h-[380px] overflow-hidden">
              <img
                src={car.image}
                alt={car.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                "
              />
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 z-10 p-6">
              
              {/* CATEGORY */}
              <span
                className="
                  inline-block
                  rounded-full
                  bg-red-600
                  px-4 py-1
                  text-xs
                  font-black
                  uppercase
                  tracking-[2px]
                  text-white
                "
              >
                NEWS
              </span>

              {/* TITLE */}
              <h2
                className="
                  mt-4
                  text-3xl
                  font-black
                  italic
                  leading-tight
                  text-white
                  transition-all duration-500
                  group-hover:text-red-500
                "
              >
                {car.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {car.desc}
              </p>

              {/* READ MORE */}
              <div
                className="
                  mt-5
                  flex items-center gap-2
                  text-sm
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-white
                "
              >
                Read More →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}