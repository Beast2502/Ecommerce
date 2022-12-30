import "./App.css";

// Views
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import Products from "./views/Products";
import ProductDetailPage from './views/ProductDetail';
import Cart from "./views/Cart";
import CheckOut from "./views/Checkout";
import SignUp from "./views/SignUp";
import LogIn from "./views/Login";


// Routes
import { Route ,Routes} from "react-router-dom";


const  App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route exact path= "/products" element={<Products/>} />
        <Route exact path= "/products/:id" element={<ProductDetailPage/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/checkout" element={<CheckOut/>} />
        <Route exact path="/login" element={<LogIn/>} />
        <Route exact path="/signup" element={<SignUp/>} />
       </Routes>
    </>
  );
}

export default App;
