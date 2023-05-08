import "./AddProduct.css";
import { useState } from "react";
import axios from "axios";
const AddProduct = (props) => {
  const [formData, setFormData] = useState(
    props.defaultValue || {
      Name: "",
      Category: "",
      Price: "",
      Image: "",
    }
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(false);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const { name, value } = event.target;
    const s = value.split("\\");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: `assets/images/${s[2]}`,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    if (formData.Name && formData.Category && formData.Price && formData.Image)
      return true;
    else return false;
  };

  const handleSubmit = async (event) => {
    console.log(props.defaultValue);
    //submit add
    if (props.defaultValue === false) {
      event.preventDefault();
      if (!validate()) {
        setError(true);
      } else {
        setError(false);
        try {
          const response = await axios.post(
            "https://6453582ce9ac46cedf22c25e.mockapi.io/products",
            formData
          );

          if (response.status === 201) {
          } else {
            throw new Error("Failed to add item");
          }
          // props.close();
          props.afterAdd();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      //submit edit
      event.preventDefault();
      if (!validate()) {
        setError(true);
      } else {
        setError(false);
        try {
          const response = await axios.put(
            `https://6453582ce9ac46cedf22c25e.mockapi.io/products/${props.toEdit}`,
            formData
          );
          setFormData({
            Name: "",
            Category: "",
            Price: "",
            Image: "",
          });
          setSelectedFile(null);
          props.resetEdit();
          props.close();
          props.afterAdd();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <div
      className="addProductContainer"
      onClick={(e) => {
        if (e.target.className == "addProductContainer") {
          props.close();
        }
      }}
    >
      <div className="addProduct">
        <form>
          <div className="form-group">
            <label htmlFor="Name">Product Name</label>
            <input name="Name" value={formData.Name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Category">Product Category</label>
            <input
              name="Category"
              value={formData.Category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price</label>
            <input
              type="Number"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input type="file" name="Image" onChange={handleFileInputChange} />
          </div>
          {error && (
            <div className="errorDiv">
              <span>Please fill all fields</span>
            </div>
          )}
          <button className="btn" onClick={handleSubmit}>
            Done
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
