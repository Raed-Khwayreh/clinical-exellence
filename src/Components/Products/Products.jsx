import "./ProductsStyle.css";
import ProductsCard from "./ProductsCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Cancer center",
      cat: "Orthopedics",
      img: "assets/images/p1.png",
    },
    {
      id: 2,
      name: "Prenatal care",
      cat: "Outpatient care",
      img: "assets/images/p2.png",
    },
    {
      id: 3,
      name: "Outpatient care",
      cat: "Cancer center",
      img: "assets/images/p3.png",
    },
    {
      id: 4,
      name: "Nutritional support",
      cat: "Neurosurgery",
      img: "assets/images/p4.png",
    },
    {
      id: 5,
      name: "Prenatal care",
      cat: "Cancer center",
      img: "assets/images/p5.png",
    },
    {
      id: 6,
      name: "Orthopedics",
      cat: "Outpatient care",
      img: "assets/images/p6.png",
    },

    {
      id: 7,
      name: "Women's health",
      cat: "Prenatal care",
      img: "assets/images/p7.png",
    },
    {
      id: 8,
      name: "Orthopedics",
      cat: "Women's health",
      img: "assets/images/p8.png",
    },
  ];
  return (
    <section className="products">
      <div className="container d-md-block d-none ">
        <div className="productSectionTitle">
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
        </div>
        {
          <div className="productsFlex ">
            {products.map((e, i) => (
              <ProductsCard key={i} name={e.name} cat={e.cat} img={e.img} />
            ))}
          </div>
        }
      </div>
      <div className="container mt-5 px-4">
        <Carousel className="main-slide d-md-none d-block" width="100%">
          {products.map((e, i) => (
            <ProductsCard key={i} name={e.name} cat={e.cat} img={e.img} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default Products;
