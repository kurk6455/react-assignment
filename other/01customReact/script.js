// 1. Select the root DOM node where our custom "React element" will be rendered
const mainContainer = document.getElementById("root");

// 2. Define the structure of a React-like element in plain JavaScript
//    - "type" → corresponds to the HTML tag (like <a>, <div>, <p>)
//    - "props" → attributes/properties of that element (href, target, etc.)
//    - "children" → inner content/text of the element
const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Visit google.com"
}

// 3. Our custom renderer function that works like ReactDOM.render()
//    It takes an element description (reactElement) and creates actual DOM nodes
const customRenderer = (element, container) => {
    // (a) Create a new DOM element based on "type" (here: <a>)
    const ele = document.createElement(element.type);

    // (b) Add the "children" (text inside the element)
    ele.innerHTML = element.children;

    // (c) Assign all properties (props) as HTML attributes
    //     Example: href="https://google.com", target="_blank"
    for (const prop in element.props) {
        ele.setAttribute(prop, element.props[prop]);
    }

    // (d) Append the newly created element to the container (root)
    container.appendChild(ele);
}

// 4. Call the renderer with our element & root → actually adds <a> inside #root
customRenderer(reactElement, mainContainer);
