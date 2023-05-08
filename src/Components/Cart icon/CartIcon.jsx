import "./CartIcon.css";
import { BsCart } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
const CartIcon = (props) => {
  const cardList = props.cartList;
  const calcPrice = () => {
    let sum = 0;
    for (let index = 0; index < cardList.length; index++) {
      sum += parseInt(cardList[index].Price);
    }
    return sum;
  };

  const [openCart, setOpen] = useState(false);
  return (
    <div className="cartToDrop" onClick={() => setOpen((prev) => !prev)}>
      <BsCart />
      <span className="count" href="">
        {props.cartCount}
      </span>
      {openCart && (
        <div className="dropCart">
          <div className="dropCartDiv">
            <div className="cardAndCount">
              <RiShoppingCartLine size={18} color="#737A9D" />
              <span className="dropCartDivSpan"> {cardList.length}</span>
            </div>
            <div className="price d-flex">
              <p>
                Total Price : <span>{"$" + calcPrice()}</span>
              </p>
            </div>
          </div>
          <hr className="my-0" />
          <div className="cardList">
            <ul>
              {cardList.map((e) => (
                <li>
                  <div className="cardListItem">
                    <img src={process.env.PUBLIC_URL + e.Image} alt="" />
                    <p className="cardProductName">
                      {e.Name} <br />
                      <div className="priceAndQauntity ">
                        <p className="cardPrice">{"$" + e.Price}</p>
                      </div>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button>Check Out</button>
        </div>
      )}
    </div>
  );
};
export default CartIcon;
