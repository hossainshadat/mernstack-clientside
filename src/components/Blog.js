import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Blog</span>
            </span>{" "}
            MERN Stack developer steps
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            You will learn steps by steps on this course. This is the best
            course internet ever.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">what is cors?</p>
              <p className="text-gray-700">
                Cross-origin resource sharing (CORS) is a mechanism that allows
                restricted resources on a web page to be requested from another
                domain outside the domain from which the first resource was
                served.[1] A web page may freely embed cross-origin images,
                stylesheets, scripts, iframes, and videos.[2] Certain
                "cross-domain" requests, notably Ajax requests, are forbidden by
                default by the same-origin security policy. CORS defines a way
                in which a browser and server can interact to determine whether
                it is safe to allow the cross-origin request.[3] It allows for
                more freedom and functionality than purely same-origin requests,
                but is more secure than simply allowing all cross-origin
                requests.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </p>
              <p className="text-gray-700">
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords, phone numbers,
                popular federated identity providers like Google, Facebook and
                Twitter, and more. Firebase Authentication integrates tightly
                with other Firebase services, and it leverages industry
                standards like OAuth 2.0 and OpenID Connect, so it can be easily
                integrated with your custom backend. When you upgrade to
                Firebase Authentication with Identity Platform, you unlock
                additional features, such as multi-factor authentication,
                blocking functions, user activity and audit logging, SAML and
                generic OpenID Connect support, multi-tenancy, and
                enterprise-level support.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How does the private route work?
              </p>
              <p className="text-gray-700">
                The react private route component renders child components
                (children) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property. The current logged in user
                (authUser) is retrieved from Redux state with a call to the
                useSelector() hook. Redux is used in this example however it is
                not required to implement a Private Route component in React
                Router 6. You could use a different state management library or
                any approach you prefer to get the logged in status of the user.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is Node? How does Node work?
              </p>
              <p className="text-gray-700">
                Node.js is an open-source backend javascript runtime
                environment. It is a used as backend service where javascript
                works on the server-side of the application. This way javascript
                is used on both frontend and backend. Node.js runs on chrome v8
                engine which converts javascript code into machine code, it is
                highly scalable, lightweight, fast, and data-intensive. Working
                of Node.js: Node.js accepts the request from the clients and
                sends the response, while working with the request node.js
                handles them with a single thread. To operate I/O operations or
                requests node.js use the concept of threads. Thread is a
                sequence of instructions that the server needs to perform. It
                runs parallel on the server to provide the information to
                multiple clients. Node.js is an event loop single-threaded
                language. It can handle concurrent requests with a single thread
                without blocking it for one request.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Who should take this mern stack training course?
              </p>
              <p className="text-gray-700">
                If you are looking to do a MERN stack course, knowing some of
                its related terms is a good idea. MongoDB, Express, React, and
                Node.js are all part of MERN Stack. MERN stack, an open-source
                JavaScript solution for full-stack JavaScript applications. MERN
                stack allows faster development and execution of websites and
                applications. You can say MERN makes application development
                quick and easy. Let’s go through the umbrella terms of MERN one
                by one.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What are the prerequisites for this mern stack learning course?
              </p>
              <p className="text-gray-700">
                React and Node are a popular combination for building robust
                full-stack applications. Learn full-stack JavaScript development
                with MongoDB, Express, React, and Node.js (MERN). In this
                comprehensive learning path, you can learn how to build
                data-driven applications, as well as test, secure, and deploy
                your code. This path requires basic knowledge of HTML, CSS,
                JavaScript, and Git, which are covered in our Become a Web
                Developer learning path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
