/**
 *
 * Creating nested HTML structure with React.
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-one" }, [
    React.createElement(
      "h1",
      { id: "child-one-heading", key: "child-one-heading" },
      "Hello World from React by Shivam."
    ),
    React.createElement(
      "h1",
      { id: "child-one-heading-two", key: "child-one-heading-two" },
      "Hello World two from React by Shivam."
    ),
  ]),
  React.createElement("div", { id: "child-two" }, [
    React.createElement(
      "h1",
      { id: "child-two-heading", key: "child-two-heading" },
      "Hello World from React by Shivam."
    ),
    React.createElement(
      "h1",
      { id: "child-two-heading-two", key: "child-two-heading-two" },
      "Hello World two from React by Shivam."
    ),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
