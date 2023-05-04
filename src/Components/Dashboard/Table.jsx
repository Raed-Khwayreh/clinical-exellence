import { BsPencilFill, BsTrash } from "react-icons/bs";
import axios from "axios";
import "./Table.css";
const Table = (props) => {
  const del = async (id) => {
    const response = await axios.delete(
      `https://6453582ce9ac46cedf22c25e.mockapi.io/products/${id}`
    );

    props.getData();
  };
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((e, idx) => (
            <tr key={idx}>
              <td>
                <div className="tdDiv">{e.id}</div>
              </td>
              <td>
                <img src={process.env.PUBLIC_URL + e.Image} alt="" />
              </td>
              <td>{e.Name}</td>
              <td>{e.Category}</td>
              <td>{"$" + e.Price}</td>
              <td>
                <span className="actions">
                  <BsPencilFill
                    color="#5f6ea4"
                    onClick={() => props.edit(idx, e.id)}
                  />
                  <BsTrash color="#d9534f" onClick={() => del(e.id)} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
