import Class from "./classCard";
export default function Classes() {
  const classes = [
    {
      picture: "/blog-17-11-02-accel-algorithms-1200x675.png",
      heading: "CSE 450 - Design & Analysis of Algorithms",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fuget consequuntur saepe laborum.",
    },

    {
      picture: "/blog-17-11-02-accel-algorithms-1200x675.png",
      heading: "CSE 355 - Introduction to Theoretical Computer Science",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fuget consequuntur saepe laborum.",
    },

    {
      picture: "/blog-17-11-02-accel-algorithms-1200x675.png",
      heading: "CSE 335 - Mobile Application Development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fuget consequuntur saepe laborum.",
    },
  ];

  return (
    <>
      <div className='mx-auto max-w-lg text-center'>
        <h2 className='text-3xl font-bold sm:text-4xl pt-16 '>
          Notable Courses
        </h2>

        <p className='mt-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fuget
          consequuntur saepe laborum.
        </p>
      </div>
      {classes.map((item, idx) => {
        return (
          <Class
            key={idx}
            picture={item.picture}
            heading={item.heading}
            description={item.description}
          />
        );
      })}
    </>
  );
}
