// Nested HTML Structure inside your react application
{/* <div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands) */}

// If we want to give 2 elements as the siblings - create an array to do that ..

const parent = React.createElement("div",
  {id: "parent"},
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
 )

 console.log(parent);  // Object

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);











 