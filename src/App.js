import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./container/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductsPage, { baseURL } from "./container/Product/ProductsPage";
import Category1 from "./container/Categories/Category1";
import Category2 from "./container/Categories/Category2";
import Category3 from "./container/Categories/Category3";
import Category4 from "./container/Categories/Category4";
import ProductDetail from "./container/Product/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/productsdetail/:id" element={<ProductDetail/>} ></Route>
        <Route path="/category1" element={<Category1 />}></Route>
        <Route path="/category2" element={<Category2 />}></Route>
        <Route path="/category3" element={<Category3 />}></Route>
        <Route path="/category4" element={<Category4 />}></Route>
      </Routes>
    </>
  );
}

export default App;
