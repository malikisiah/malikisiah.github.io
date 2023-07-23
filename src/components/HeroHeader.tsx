"use client";
import Image from "next/image";
export default function HeroHeader() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="max-w-md">
      <div className="avatar flex items-center justify-center pb-5">
        <div className="w-56 rounded-full">
          <Image
            src="/20230722_1207371.jpg"
            alt=""
            width={150}
            height={150}
            quality={100}
            className=""
          />
        </div>
      </div>
      <h1 className="mb-5 text-5xl font-bold ">I&apos;m Malik</h1>
      <p className="mb-5 font-semibold">A Software Engineer from Chicago</p>
      <button
        className="btn btn-ghost link  rounded-md normal-case"
        onClick={scrollToNextSection}
      >
        View Page
      </button>
    </div>
  );
}
