"use client";
import { SiNike } from "react-icons/si";
import Image from "next/image";
export default function GymHero() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <Image
          src='/YqWKU7g.jpg'
          className='max-w-sm rounded-lg shadow-2xl w-2/3 md:w-auto md:h-auto'
          alt=''
          width={100}
          height={100}
          quality={100}
        />
        <div>
          <div className='flex mr-28 py-6 items-center'>
            <h1 className='text-5xl font-bold pr-8'>Training Never Stops</h1>
            <SiNike className='w-20 h-20' />
          </div>

          <button
            className='btn btn-ghost link rounded normal-case'
            onClick={handleClick}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
