import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import Table from "./Table";
import AddProduct from "./AddProduct";
import "./Dashboard.css";
import axios from "axios";
const Dashboard = () => {
  const handleEdit = (idx, id) => {
    setIDEdit(idx);
    setEditPut(id);
    setAddProduct(true);
  };
  const [editPut, setEditPut] = useState(null);
  const [editId, setIDEdit] = useState(null);
  const [addProduct, setAddProduct] = useState(false);
  const [products, setState] = useState([]);
  const resetEdit = () => {
    setIDEdit(null);
  };
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
    <>
      <div className="dashNav">
        <p className="brand" href="#">
          MEDSONO
        </p>
        <Link to="/">
          <BiExit className="logout" color="#ffffff" size={25}></BiExit>
        </Link>
      </div>
      <div className="dashBody">
        <Table products={products} getData={fetch} edit={handleEdit} />
        <button
          className="dashAdd"
          onClick={() => setAddProduct((prev) => !prev)}
        >
          <IoIosAdd size={20} color="#ffffff" />
        </button>

        {addProduct && (
          <AddProduct
            close={() => setAddProduct(false)}
            afterAdd={fetch}
            defaultValue={editId !== null && products[editId]}
            toEdit={editPut}
            resetEdit={resetEdit}
          />
        )}
      </div>
    </>
  );
};
export default Dashboard;
