"use client";
import Image from "next/image";
type ClassProp = {
  picture: string;
  heading: string;
  description: string;
};

export default function Class(props: ClassProp) {
  return (
    <section>
      <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <Image
                alt=''
                src={props.picture}
                className='absolute inset-0 h-full w-full object-cover'
                height={300}
                width={300}
                quality={100}
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-300'>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl text-black'>
                {props.heading}
              </h2>

              <p className='mt-4 text-black font-semibold '>
                {props.description}
              </p>

              {/* <a
                href='#'
                className='mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
              >
                Get in Touch
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
