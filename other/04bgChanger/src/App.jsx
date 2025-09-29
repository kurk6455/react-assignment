import { useState } from "react";
import "./App.css";


function App() {
  const [color, setColor] = useState("white");

  const changeBg = (newColor) => {
    setColor(newColor);
  }

  return (
    <div className={`w-full h-screen flex justify-center items-end ${color}`} >
      <div className="bg-white border-white rounded-xl m-5 p-1">
        <button onClick={() => changeBg("bg-violet-300")} className="bg-violet-500 text-white m-2 p-1 w-30 rounded-xl">violet</button>
        <button onClick={() => changeBg("bg-indigo-300")} className="bg-indigo-500 text-white m-2 p-1 w-30 rounded-xl">indigo</button>
        <button onClick={() => changeBg("bg-blue-300")} className="bg-blue-500 text-white m-2 p-1 w-30 rounded-xl">blue</button>
        <button onClick={() => changeBg("bg-green-300")} className="bg-green-500 text-white m-2 p-1 w-30 rounded-xl">Green</button>
        <button onClick={() => changeBg("bg-yellow-300")} className="bg-yellow-500 text-white m-2 p-1 w-30 rounded-xl">yellow</button>
        <button onClick={() => changeBg("bg-orange-300")} className="bg-orange-500 text-white m-2 p-1 w-30 rounded-xl">orange</button>
        <button onClick={() => changeBg("bg-red-300")} className="bg-red-500 text-white m-2 p-1 w-30 rounded-xl">red</button>
    </div>
      </div>
  )
}

export default App
