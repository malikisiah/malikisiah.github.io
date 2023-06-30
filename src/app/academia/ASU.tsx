"use client";
export default function ASU() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className='hero min-h-screen bg-[url(/Facilities-Brickyard-Engineering-Cropped.jpg)]'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content flex-col lg:flex-row-reverse text-neutral-content'>
        {/* <img
          src='/images/stock/photo-1635805737707-575885ab0820.jpg'
          className='max-w-sm rounded-lg shadow-2xl'
        /> */}
        <div className='mr-96'>
          <h1 className='text-5xl max-w-xl font-bold'>
            Bachelor of Science, Computer Science
          </h1>
          <p className='py-6'>Expected December, 2023</p>
          <button
            className='btn btn-ghost link  rounded-md normal-case'
            onClick={scrollToNextSection}
          >
            View Page
          </button>
        </div>
      </div>
    </div>
  );
}
