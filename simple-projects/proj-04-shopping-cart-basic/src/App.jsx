import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { WishListDataProvider } from "./utilities/WishListDataProvider.jsx";
import { ShoppingCartProvider } from "./utilities/ShoppingCartProvider.jsx";
import { OrderTotalProvider } from "./utilities/OrderTotalProvider.jsx";
import { WishListUIProvider } from "./utilities/WishListUIProvider.jsx";
import { Header } from "./components/Header.jsx"
import { WishList } from "./components/WishList.jsx"
import { ShoppingCart } from "./components/ShoppingCart.jsx"
import './App.css'

function App() {
  console.log("Rendering <App>");

  return (
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
  )
}


const Layout = () => {

  return (
    <>
      <WishListDataProvider>
        <WishListUIProvider>
          <ShoppingCartProvider>
            <OrderTotalProvider>
              <Header />
              <Outlet />
            </OrderTotalProvider>
          </ShoppingCartProvider>
        </WishListUIProvider>
      </WishListDataProvider>
    </>
  )
}

export default App


