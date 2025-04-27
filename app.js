import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const elem = <span>React Element... </span>;

// method(04): Using one element inside another element
const title = (
<h1 className="head" tabIndex="5">
  {elem}
  Learning React using JSX 🚀
</h1>
);

// method(03): Using title element inside react Heading component
const Heading = () => (
  <div id="container">

    {/* method(02): Wirting JavaScript code inside of JSX by using {} */}
    {title}
    {console.log("Tanya")}

    <h1 className="heading">Learning React Functional Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

// way of Rendering component
root.render(<Heading />);



















// import React from "react";
// import ReactDOM from "react-dom/client";

// // React Functional Component
// const Title = () => (
// <h1 className="head" tabIndex="5">
//   Learning React using JSX 🚀
// </h1>
// );

// // method(01): Component Composition ➔ Using one component inside another component
// const HeadingComponent = () => (
//   <div id="container">
//     <Title/>

//  //  <Title></Title>  -> same as above

//     <h1 className="heading">Learning React Functional Component</h1>
//   </div>
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));

// // way of Rendering component
// root.render(<HeadingComponent />);
















// JSX -> JSX is just a way to write HTML inside JavaScript.
// ✅ It looks like HTML,
// ✅ But it's actually JavaScript code that React understands.

// import React from "react";
// import ReactDOM from "react-dom/client";

// // Creating react element by using JSX
// // We use () in JSX to group multiple lines together — so that
// // JavaScript understands it as one single expression.
// const jsxHeadingElement = (
// <h1 className="head" tabIndex="5">
// Learning React using JSX 🚀
// </h1>
// );


// // React Functional Component
// const headingComponent = () => (
//   <div id="container">
//     <h1 className="heading">Learning React Functional Component</h1>
//   </div>
// );


// // const headingComponent2 = () => {
// // return <h1 className="heading">Learning React Functional Component</h1>
// // }  -> same syntax as above


// console.log(jsxHeadingElement);  // Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // way of Rendering element
// root.render(jsxHeadingElement);

// // way of Rendering component
// root.render(<headingComponent />);


















// import React from "react";
// import ReactDOM from "react-dom/client";

// Creating React element using React
// const heading = React.createElement("h1",
//   {id: "heading"},
//   "Learning React 🚀"
// );

// console.log(heading);  // Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)











// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement("div",
//   {id: "parent"},
//   React.createElement("div", {id: "child"}, [
//     React.createElement("h1", {}, "This is Learning react 🚀"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//   React.createElement("div", {id: "child2"}, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//  )

//  console.log(parent);  // Object

//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);











