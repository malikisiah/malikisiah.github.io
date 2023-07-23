import Project from "./ProjectCard";
export default function ProjectSection() {
  const projects = [
    {
      link: "https://special-affair.vercel.app/",
      background: "/specialAffair.png",
      heading: "A Special Affair",
      description:
        "Full Stack application for a women's dance studio. Created with Next.js. Features include user authentication, webhooks that store user data, and secured integrated payments through stripe.",
    },
    {
      link: "https://mysongfinder.netlify.app/",
      background: "songFinder.png",
      heading: "Song Finder",
      description:
        "Single page React app that leverages Spotify's web API to reccomend a song based on a selected genre",
    },
    {
      link: "https://sade-seven.vercel.app/",
      background: "/sade.png",
      heading: "Sade Tribute Page",
      description:
        "Tribute page for one of my favorite artists, Sade. Mostly front-end static content with simple user authentication handled with Next-auth ",
    },

    {
      link: "https://carnival-blush.vercel.app/",
      background: "/carnival.png",
      heading: "Carnival Guide",
      description:
        "Capstone project currently in development with 4 other teammates. Ecommerce website with an online shop, database to store users information and a secure payment gateway",
    },
  ];
  return (
    <section className="bg-base-100 min-h-screen ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl ">My Projects</h2>

          <p className="mt-4">
            Most of these projects were completed in my own free time. The goal
            being to enchance my skillset and apply my theoretical knowledge to
            real-world scenarios.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-12 text-center">
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
