import Header from "../Header/Header";
import Features from "../Features/Features";
import Content from "../Content/Content";
import Products from "../Products/Products";
import Advantages from "../Advantages/Advantages";
import Blog from "../Blog/Blog";
import Subscription from "../Subscription/Subscription";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartList, setCartList] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };
  const decrementCart = () => {
    setCartCount(cartCount - 1);
  };
  const [products, setState] = useState([]);
  const fetch = async () => {
    const response = await axios.get(
      "https://6453582ce9ac46cedf22c25e.mockapi.io/products"
    );
    setState(response.data);
  };

  const addToCart = (id) => {
    const item = products.filter((item) => item.id == id)[0];
    setCartList([...cartList, item]);
  };
  const deleteFromCart = (id) => {
    const newList = cartList.filter((item) => item.id != id);
    setCartList(newList);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <Header count={count} cartCount={cartCount} cartList={cartList} />
      <Features />
      <Content />
      <Products
        products={products}
        increment={increment}
        decrement={decrement}
        incrementCart={incrementCart}
        decrementCart={decrementCart}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
      />
      <Advantages />
      <Blog />
      <Subscription />
      <Footer />
    </>
  );
};
export default Home;
