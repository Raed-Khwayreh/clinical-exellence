function ProductsCard(props) {
  return (
    <div className="product">
      <a className="productName">{props.name}</a>
      <br />
      <a className="productCat">{props.cat}</a>
      <img src={process.env.PUBLIC_URL + props.img} alt="" />
      <p className="productPrice">$6.48</p>
    </div>
  );
}
export default ProductsCard;
