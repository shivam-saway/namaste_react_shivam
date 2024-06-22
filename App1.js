/**
 * heading - React Element
 */
const heading = React.createElement(
  "h1",
  {
    id: "heading", // here, we can give attributes to the element.
  },
  "Hello World from React - App.js!"
); // React API to create html element for us.

/** heading as of now is a javascript object. 
         * At this stage the heading variable is a react element and not a DOM element.
         * It is the job of react dom to prepare the virtual DOM first and then update the actual DOM.
         * 
         * {
        "type": "h1",
        "key": null,
        "ref": null,
        "props": {
            "id": "heading",
        "children": "Hello World from React - App.js!"
        },
        "_owner": null,
        "_store": {}
        }
        * 
        * As we can see here the heading object as property props.
        * The props is the key feature of react and it is the attribute and childrens of the parent object which we create using createElement API from React.
        * */
console.log(heading);

/** ReactDOM API to tell react engine about the root container under which DOM manipulation will be done. */
const root = ReactDOM.createRoot(document.getElementById("root"));
/** ReactDOM API to update the actual DOM in web browser. */
root.render(heading);

/**
 * We are able to use react here because we have imported the react and react DOM library using the CDN links.
 * There are other ways also to import and use react in your browser.
 */
