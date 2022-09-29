import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="accordion my-5" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              How Does React Work?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>
                ReactJS divides the interface into isolated re-usable code
                pieces called components. Reaction components work the same way
                as JavaScript functions because they take arbitrary entries
                called properties or props. You can get as many components as
                necessary without cluttering your code. React utilizes two
                virtual DOMs to display the user interface. One of these is used
                to store the current state of objects and the other to store the
                preceding state of objects. When, the Virtual DOM is updated,
                reacts to compare the two Virtual DOMs's and becomes familiar
                with the updated Virtual MOD objects.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Differences between props and state in react?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>
                {" "}
                Simply, Props are used to send data from one component to
                another. State is a local data storage that is local to the
                component only and cannot be transmitted to other components.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What are the uses of useEffect in react?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>
                The useEffect Hook allows us to perform side effects in our
                components. UseEffects are mainly use for fetching data,
                directly updating the DOM, and timers. useEffect accepts two
                arguments. The second argument is optional. useEffect runs on
                every render that means when the count changes, a render
                happens, which then triggers another effect.We should always
                include the second parameter which accepts an array. We can
                optionally pass dependencies to useEffect in this array.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
