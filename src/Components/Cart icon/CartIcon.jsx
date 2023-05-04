import "./CartIcon.css";
import { BsCart } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
const CartIcon = () => {
  const cardList = [
    {
      img: "assets/images/p5.png",
      productName: "Prenatal care",
      price: 15,
      quantity: 3,
    },
    {
      img: "assets/images/p8.png",
      productName: "Nutritional support",
      price: 85,
      quantity: 1,
    },
    {
      img: "assets/images/p4.png",
      productName: "Nutritional support",
      price: 25,
      quantity: 1,
    },
    {
      img: "assets/images/p2.png",
      productName: "Prenatal care",
      price: 35,
      quantity: 5,
    },
  ];
  const calcPrice = () => {
    let sum = 0;
    for (let index = 0; index < cardList.length; index++) {
      sum += cardList[index].price;
    }
    return sum;
  };
  const calcQuantity = () => {
    let sum = 0;
    for (let index = 0; index < cardList.length; index++) {
      sum += cardList[index].quantity;
    }
    return sum;
  };
  const [openCart, setOpen] = useState(false);
  return (
    <div className="cartToDrop" onClick={() => setOpen((prev) => !prev)}>
      <BsCart />
      <span className="count" href="">
        {cardList.length}
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
              </p>{" "}
              <p className="ms-1">
                Total Quantity: <span>{calcQuantity()}</span>
              </p>
            </div>
          </div>
          <hr className="my-0" />
          <div className="cardList">
            <ul>
              {cardList.map((e) => (
                <li>
                  <div className="cardListItem">
                    <img src={process.env.PUBLIC_URL + e.img} alt="" />
                    <p className="cardProductName">
                      {e.productName} <br />
                      <div className="priceAndQauntity ">
                        <p className="cardPrice">{"$" + e.price}</p>
                        <p className="cardQuantity">
                          {"Quantity : " + e.quantity}
                        </p>
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
