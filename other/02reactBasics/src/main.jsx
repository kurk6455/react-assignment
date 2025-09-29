import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react'


const google = createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  "visit google.com"
)
// const googleElement = {
//     type : "a",
//     props : {
//         href : "https://google.com",
//         target : "_blank"
//     },
//     children : "Visit google.com"
// }

createRoot(document.getElementById('root')).render(
  //This will work as App is a js function
  // but will result in code confusion
  // App()

  //This wont work as in customReact, i wrote customRenderer but here createRoot expect other arguments
  //googleElement

  //using react createElement
  google
)
