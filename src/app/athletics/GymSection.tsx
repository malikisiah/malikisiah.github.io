import Image from "next/image";
export default function GymSection() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold  sm:text-3xl">Gallery</h2>

          <p className="max-w-md mx-auto mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <div className="relative block group">
              <Image
                src="/320983472_836032644140661_495595645374623609_n.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 hover:scale-105 rounded-md"
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </li>

          <li>
            <div className="relative block group">
              <Image
                src="/VideoCapture_20230720-120429.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 hover:scale-105 rounded-md"
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative block group">
              <Image
                src="/IMG_1970.jpg "
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 hover:scale-105 rounded-md"
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
