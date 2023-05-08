import "./ProductsStyle.css";
import ProductsCard from "./ProductsCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
const Products = (props) => {
  const products = props.products;
  return (
    <section className="products">
      <div className="container d-md-block d-none ">
        <div className="productSectionTitle ">
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
        </div>
        {
          <div className="productsFlex  ">
            {products.map((e, i) => (
              <ProductsCard
                key={i}
                id={e.id}
                name={e.Name}
                cat={e.Category}
                img={e.Image}
                price={e.Price}
                love={e.love}
                cart={e.cart}
                increment={props.increment}
                decrement={props.decrement}
                decrementCart={props.decrementCart}
                incrementCart={props.incrementCart}
                addToCart={props.addToCart}
                deleteFromCart={props.deleteFromCart}
              />
            ))}
          </div>
        }
      </div>
      <div className="container mt-5 px-4">
        <Carousel
          showArrows={true}
          className="main-slide d-md-none d-block"
          width="100%"
          showThumbs={false}
        >
          {products.map((e, i) => (
            <ProductsCard
              key={i}
              id={e.id}
              name={e.Name}
              cat={e.Category}
              img={e.Image}
              price={e.Price}
              love={e.love}
              cart={e.cart}
              increment={props.increment}
              decrement={props.decrement}
              decrementCart={props.decrementCart}
              incrementCart={props.incrementCart}
              addToCart={props.addToCart}
              deleteFromCart={props.deleteFromCart}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default Products;
