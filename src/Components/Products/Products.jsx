import "./ProductsStyle.css";
import ProductsCard from "./ProductsCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [products, setState] = useState([]);
  const fetch = async () => {
    const response = await axios.get(
      "https://6453582ce9ac46cedf22c25e.mockapi.io/products"
    );
    setState(response.data);
  };
  useEffect(() => {
    fetch();
  }, []);
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
                name={e.Name}
                cat={e.Category}
                img={e.Image}
                price={e.Price}
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
              name={e.Name}
              cat={e.Category}
              img={e.Image}
              price={e.Price}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default Products;
