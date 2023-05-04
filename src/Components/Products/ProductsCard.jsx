import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
function ProductsCard(props) {
  return (
    <div className="product">
      <a className="productName">{props.name}</a>
      <br />
      <a className="productCat">{props.cat}</a>
      <img src={process.env.PUBLIC_URL + props.img} alt="" />
      <p className="productPrice">{"$" + props.price }</p>
      <div className="addAndLove">
        <AiOutlineHeart color="red" />
        <RiShoppingCartLine />
      </div>
    </div>
  );
}
export default ProductsCard;
