import Class from "./ClassCard";
export default function ClassSection() {
  const classes = [
    {
      picture: "/blog-17-11-02-accel-algorithms-1200x675.png",
      heading: "CSE 450 : Design & Analysis of Algorithms",
      description:
        'This course delves into the core principles of algorithm design and analysis, exploring techniques to validate algorithm correctness and efficienty. Subsequently, the course dives into the realm of intractability, understanding the intricacies of NP-completeness, polynomial-time reductions, and identifying inherently "hard" problems',
    },

    {
      picture: "/wallhaven-nr8wpj.jpg",
      heading: "CSE 471 : Intro Artificial Intelligence",
      description:
        "In this course, I explored a myriad of techniques, from classic search algorithms and knowledge representation to modern machine learning methodologies. This course not only solidified my understanding of the theoretical underpinnings of AI but also offered hands-on experience with real-world applications.",
    },

    {
      picture: "/wallhaven-39zy2v.png",
      heading: "CSE 335 : Mobile Application Development",
      description:
        "This class dives deep into the realm of mobile application development, specifically focusing on the iOS platform. Leveraging the capabilities of SwiftUI and Storyboard, I had the opportunity to design and implement intricate apps that were both functional and user-friendly. Through hands-on projects, I refined my skills in creating intuitive user interfaces and learned to navigate the unique challenges presented by mobile development.",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl pt-16 ">
          Notable Courses
        </h2>

        <p className="mt-4">
          {" "}
          Optional Electives that I found intriguing and thoroughly enjoyed
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
