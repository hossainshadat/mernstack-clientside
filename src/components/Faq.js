import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is MERN Stack?
            </summary>
            <div className="px-4 pb-4">
              <p>
                MERN stands for MongoDB, Express, React, Node, after the four
                key technologies that make up the stack. MongoDB — document
                database Express(.js) — Node.js web framework React(.js) — a
                client-side JavaScript framework Node(.js) — the premier
                JavaScript web server Express and Node make up the middle
                (application) tier. Express.js is a server-side web framework,
                and Node.js is the popular and powerful JavaScript server
                platform. Regardless of which variant you choose, ME(RVA)N is
                the ideal approach to working with JavaScript and JSON, all the
                way through.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Why is MERN stack development considered good for Web Application?
            </summary>
            <div className="px-4 pb-4">
              <p>
                As people’s dependency on technology grows, so does the demand
                for effective web and mobile applications. As a result, software
                developers explore different approaches to achieve a better user
                experience. For example, even when there is a lot of network
                congestion, the user wants a better UI and a faster response
                time for HTTP requests. As a result, stack technology is
                introduced, which creates a responsive and interactive UI and
                makes the development process much easier. MERN stack is a
                popular stack technology that consists of four powerful
                technologies: MongoDB, Express.js, React.js, and Node.js.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does MERN Stack benefit in web application development?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                MongoDB, Express, React, and Node.js are all part of the MERN
                Stack. MERN stack is an open-source full-stack JavaScript
                solution for developing mobile applications or web application
                quickly and easily. MERN was created to make application
                development quick and easy. Each component of MERN has a
                distinct function that we must comprehend. Let’s take a look at
                them now.
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
