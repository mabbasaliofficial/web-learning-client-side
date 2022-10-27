import React from "react";

const Blogs = () => {
  return (
    <div className="border border-primary rounded m-2 p-2 m-lg-5 p-lg-5">
      <div className="border border-primary rounded m-2 p-2 m-lg-5 p-lg-5">
      <h1>What is cors?</h1>
      <p>
        Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a
        web page to be requested from another domain outside the domain from which the first
        resource was served.A web page may freely embed cross-origin images, stylesheets, scripts,
        iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden
        by default by the same-origin security policy. CORS defines a way in which a browser and
        server can interact to determine whether it is safe to allow the cross-origin request. It
        allows for more freedom and functionality than purely same-origin requests, but is more
        secure than simply allowing all cross-origin requests. The specification for CORS is
        included as part of the WHATWG's Fetch Living Standard. This specification describes how
        CORS is currently implemented in browsers. An earlier specification was published as a W3C
        Recommendation.
      </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 m-lg-5 p-lg-5">
      <h1>
        Why are you using firebase? What other options do you have to implement authentication?
      </h1>
      <p>
        For most developers, building an authentication system for your app can feel a lot like
        paying taxes. They are both relatively hard to understand tasks that you have no choice but
        doing, and could have big consequences if you get them wrong. No one ever started a company
        to pay taxes and no one ever built an app just so they could create a great login system.
        They just seem to be inescapable costs. But now, you can at least free yourself from the
        auth tax. With Firebase Authentication, you can outsource your entire authentication system
        to Firebase so that you can concentrate on building great features for your app. Firebase
        Authentication makes it easier to get your users signed-in without having to understand the
        complexities behind implementing your own authentication system. It offers a straightforward
        getting started experience, optional UX components designed to minimize user friction, and
        is built on open standards and backed by Google infrastructure.
      </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 m-lg-5 p-lg-5">
      <h1>How does the private route work?</h1>
      <p>
        Private Routes in React Router (also called Protected Routes) require a user being
        authorized to visit a route (read: page). So if a user is not authorized for a specific
        page, they cannot access it. The most common example is authentication in a React
        application where a user can only access the protected pages when they are authorized (which
        means in this case being authenticated). Authorization goes beyond authentication though.
        For example, a user can also have roles and permissions which give a user access to specific
        areas of the application.
      </p>
      </div>
      <div className="border border-primary rounded m-2 p-2 m-lg-5 p-lg-5">
      <h1>What is Node? How does Node work?</h1>
      <p>
        Node.js is an open-source backend javascript runtime environment. It is a used as backend
        service where javascript works on the server-side of the application. This way javascript is
        used on both frontend and backend. Node.js runs on chrome v8 engine which converts
        javascript code into machine code, it is highly scalable, lightweight, fast, and
        data-intensive. Working of Node.js: Node.js accepts the request from the clients and sends
        the response, while working with the request node.js handles them with a single thread. To
        operate I/O operations or requests node.js use the concept of threads. Thread is a sequence
        of instructions that the server needs to perform. It runs parallel on the server to provide
        the information to multiple clients. Node.js is an event loop single-threaded language. It
        can handle concurrent requests with a single thread without blocking it for one request.
        Node.js basically works on two concept Asynchronous Non-blocking I/O
      </p>
      </div>
    </div>
  );
};

export default Blogs;
