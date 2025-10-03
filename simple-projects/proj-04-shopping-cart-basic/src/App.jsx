import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header.jsx"
import { WishList } from "./components/WishList.jsx"
import { ShoppingCart } from "./components/ShoppingCart.jsx"
import { WishListProvider } from "./utilities/WishListProvider.jsx";
import './App.css'
import { ShoppingCartProvider } from "./utilities/ShoppingCartProvider.jsx";
import { OrderTotalProvider } from "./utilities/OrderTotalProvider.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WishList />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


const Layout = () => {

  return (
    <>
      <WishListProvider>
        <ShoppingCartProvider>
          <OrderTotalProvider>
            <Header />
            <Outlet />
          </OrderTotalProvider>
        </ShoppingCartProvider>
      </WishListProvider>
    </>
  )
}

export default App


