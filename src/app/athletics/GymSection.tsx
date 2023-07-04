import Image from "next/image";
export default function GymSection() {
  return (
    <section>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center'>
          <h2 className='text-xl font-bold  sm:text-3xl'>Gallery</h2>

          <p className='max-w-md mx-auto mt-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3'>
          <li>
            <div className='relative block group'>
              <Image
                src='/YqWKU7g.jpg'
                alt=''
                className='object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 hover:scale-105 rounded-md'
                width={300}
                height={300}
                quality={100}
              />
            </div>
          </li>

          <li>
            <div className='relative block group'>
              <Image
                src='https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                alt=''
                className='object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 hover:scale-105 rounded-md'
                width={300}
                height={300}
                quality={100}
              />
            </div>
          </li>

          <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
            <div className='relative block group'>
              <Image
                src='https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
                alt=''
                className='object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 hover:scale-105 rounded-md'
                width={300}
                height={300}
                quality={100}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
