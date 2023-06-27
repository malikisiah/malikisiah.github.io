"use client";
export default function Header() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className='max-w-md'>
      <h1 className='mb-5 text-5xl font-bold'>I&apos;m Malik</h1>
      <p className='mb-5'>A Software Engineer from Chicago, IL</p>
      <button
        className='btn btn-primary  normal-case'
        onClick={scrollToNextSection}
      >
        View Page
      </button>
    </div>
  );
}
