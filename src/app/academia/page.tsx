import ASU from "./ASU";
import ClassSection from "./ClassSection";

export default function Page() {
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
      <ASU />
      <ClassSection />
    </>
  );
}
