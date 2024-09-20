import React from "react";
import HeadingText from "./shared/HeadingText";

const Section4 = () => {
  const testimonials = [
    {
      id: 1,
      imageTop: "https://example.com/top-image1.png", // Replace with your top image URL
      name: "Bonnie Green",
      quote:
        "Very easy this was to integrate. If you care for your time, I hands down would go with this.",
    },
    {
      id: 2,
      imageTop: "https://example.com/top-image2.png", // Replace with your top image URL
      name: "Roberta Casas",
      quote:
        "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
    },
    {
      id: 3,
      imageTop: "https://example.com/top-image3.png", // Replace with your top image URL
      name: "Jese Leos",
      quote:
        "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
    },
    {
      id: 4,
      imageTop: "https://example.com/top-image4.png", // Replace with your top image URL
      name: "Joseph McFall",
      quote:
        "You have many examples that can be used to create a fast prototype for your team.",
    },
  ];

  return (
    <div>
      <div className="container">
        <HeadingText>Leaders Ink</HeadingText>
      </div>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src={testimonial.imageTop}
              alt="top visual"
            />
            <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
            </div>
            <blockquote className="p-4 text-gray-500 dark:text-gray-400">
              <p className="my-2">{testimonial.quote}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
