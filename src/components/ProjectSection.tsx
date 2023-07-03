import Project from "./ProjectCard";
export default function ProjectSection() {
  const projects = [
    {
      link: "https://special-affair.vercel.app/",
      background: "/specialAffair.png",
      heading: "A Special Affair",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut possimus adipisci distinctio alias voluptatum blanditiis laudantium",
    },
    {
      link: "https://mysongfinder.netlify.app/",
      background: "songFinder.png",
      heading: "Song Finder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut possimus adipisci distinctio alias voluptatum blanditiis laudantium",
    },
    {
      link: "https://sade-seven.vercel.app/",
      background: "/sade.png",
      heading: "Sade Tribute Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut possimus adipisci distinctio alias voluptatum blanditiis laudantium",
    },

    {
      link: "https://carnival-blush.vercel.app/",
      background: "/carnival.png",
      heading: "Carnival Guide",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut possimus adipisci distinctio alias voluptatum blanditiis laudantium",
    },
  ];
  return (
    <section className='bg-base-100 min-h-screen '>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl '>My Projects</h2>

          <p className='mt-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fuget consequuntur saepe laborum.
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {" "}
          {projects.map((item, idx) => {
            return (
              <Project
                key={idx}
                link={item.link}
                background={item.background}
                heading={item.heading}
                description={item.description}
              />
            );
          })}
        </div>

        <div className='mt-12 text-center'>
          {/* <a
            href='#'
            className='inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400'
          >
            Next Section
          </a> */}
        </div>
      </div>
    </section>
  );
}
