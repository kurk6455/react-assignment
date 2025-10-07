import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Header } from "./components/Header.jsx"
import { WishList } from "./components/WishList.jsx"
import { ShoppingCart } from "./components/ShoppingCart.jsx"
import './App.css'

function App() {
  console.log("Rendering <App>");

  return (
    <RecoilRoot>
      <div className="min-h-screen bg-gray-100 flex flex-col font-sans" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<WishList />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  )
}


const Layout = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App


