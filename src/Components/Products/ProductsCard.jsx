import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
function ProductsCard(props) {
  const [love, setLove] = useState(props.love);
  const [cart, setCart] = useState(props.cart);
  const changeCart = () => {
    if (cart) {
      props.deleteFromCart(props.id);
      props.decrementCart();
      setCart((prev) => !prev);
    } else {
      props.addToCart(props.id);
      props.incrementCart();
      setCart((prev) => !prev);
    }
  };
  const changeLove = () => {
    if (love) {
      props.decrement();
      console.log("inc");
      setLove((prev) => !prev);
    } else {
      props.increment();
      console.log(`dec ${props.id}`);
      setLove((prev) => !prev);
    }
  };
  return (
    <div className="product">
      <a className="productName">{props.name}</a>
      <br />
      <a className="productCat">{props.cat}</a>
      <img src={process.env.PUBLIC_URL + props.img} alt="" />
      <p className="productPrice">{"$" + props.price}</p>
      <div className="addAndLove">
        {love ? (
          <AiFillHeart color="red" onClick={changeLove} />
        ) : (
          <AiOutlineHeart color="red" onClick={changeLove} />
        )}
        {cart ? (
          <BsCartDash color="#252B42" onClick={changeCart} />
        ) : (
          <BsCartPlus color="green" onClick={changeCart} />
        )}
      </div>
    </div>
  );
}
export default ProductsCard;
