import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [productData, setProductData] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  const [imageError, setImageError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://651eae1344a3a8aa4768cdc2.mockapi.io/products"
        );
        const apiData = response.data.slice(0, 10);

        setProductData(apiData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    const productNameRegex = /^[a-zA-Z]+$/;

    if (!productNameRegex.test(value)) {
      alert("Name must not contain symbols.");
    } else if (value.length > 25) {
      alert("Product Name must be at most 25 characters.");
    }
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && !file.type.startsWith("image/")) {
      setImageError("The selected file is not an image.");
    } else {
      setImageError("");
      setProductImage(file);
    }
  };

  const handleProductFreshnessChange = (e) => {
    setProductFreshness(e.target.value);
  };

  const handleAdditionalDescription = (e) => {
    setAdditionalDescription(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    const value = e.target.value;
    const priceRegex = /^[0-9]+$/;

    if (!priceRegex.test(value)) {
      alert("Product Price must be a number, must not contain symbols.");
      return;
    }

    if (value.includes(".")) {
      alert("Product Price cannot have decimal numbers.");
      return;
    }
    setProductPrice(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !productName.trim() ||
      !productCategory ||
      !productImage ||
      !productFreshness ||
      !productPrice ||
      !additionalDescription
    ) {
      alert("Please fill in all fields before adding products!");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newProduct = {
        productName,
        productCategory,
        productImage: reader.result,
        productFreshness,
        productPrice,
        additionalDescription,
      };
     
      setProductData((prevData) => [...prevData, newProduct]);
      setProductName("");
      setProductCategory("");
      setProductImage(null);
      setProductFreshness("");
      setProductPrice("");
      setAdditionalDescription("");
    };
    reader.readAsDataURL(productImage);
  };

  const handleDeleteConfirmation = (productId) => {
    setProductToDelete(productId);
  };

  return (
    <div>
      {loading ? ( 
        <p className="text-center pt-10 text-2xl text-red-600">Loading...</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mt-14 flex flex-col items-center gap-1">
              <h4 className="mb-2 text-lg font-semibold pr-[380px]">
                Detail Product
              </h4>
              <div className="flex flex-col items-center gap-1">
                <label className="pr-[395px]">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  onChange={handleProductNameChange}
                  value={productName}
                  className="bg-white border border-gray-300 w-[500px] text-gray-900 text-sm rounded-lg p-2.5"
                />
              </div>
              <div className="pt-4">
                <label className="pr-[370px]">Product Category</label>
                <select
                  id="countries"
                  value={productCategory}
                  onChange={handleProductCategoryChange}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-[500px] p-2.5"
                >
                  <option value="">Choose...</option>
                  <option value="Hijab">Hijab</option>
                  <option value="Hoodie">Hoodie</option>
                  <option value="Sweater">Sweater</option>
                  <option value="T-shirt">T-shirt</option>
                </select>
              </div>
              <div className="pt-4">
                <label className="pr-[370px]">Image Of Product</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="block w-full border rounded-lg"
                  name="image"
                />
                {imageError && <div className="text-red-500">{imageError}</div>}
              </div>
              <div className="p-4">
                <label className="pr-[365px]">Product Freshness</label>
                <div className="flex items-center mb-3 mt-3">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="Brand New"
                    onChange={handleProductFreshnessChange}
                    name="productFreshness"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm font-normal text-gray-900 pr-[380px]">
                    Brand New
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value="Second Hand"
                    onChange={handleProductFreshnessChange}
                    name="productFreshness"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm font-normal text-gray-900 pr-[370px]">
                    Second Hand
                  </label>
                </div>
                <div className="flex items-center mt-3">
                  <input
                    id="default-radio-3"
                    type="radio"
                    value="Refurbished"
                    onChange={handleProductFreshnessChange}
                    name="productFreshness"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm font-normal text-gray-900 pr-[370px]">
                    Refurbished
                  </label>
                </div>
              </div>
              <div>
                <label className="pr-[340px]">Additional Description</label>
                <textarea
                  id="message"
                  value={additionalDescription}
                  onChange={handleAdditionalDescription}
                  rows="4"
                  className="block p-2.5 mt-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="description"
                ></textarea>
              </div>
              <div className="flex flex-col items-center gap-1">
                <label className="pr-[395px]">Product Price</label>
                <input
                  type="text"
                  id="productPrice"
                  placeholder="$ 1"
                  value={productPrice}
                  onChange={handleProductPriceChange}
                  className="bg-white border border-gray-300 w-[500px] text-gray-900 text-sm rounded-lg p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[500px]"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h1 className="pt-20 text-center font-normal text-3xl pb-4">
              List Product
            </h1>
            <table className="w-full text-sm dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-2 py-2">No</th>
                  <th className="px-2 py-2">Product Name</th>
                  <th className="px-2 py-2">Product Category</th>
                  <th className="px-2 py-2">Product Image</th>
                  <th className="px-2 py-2">Product Freshness</th>
                  <th className="px-2 py-2">Additional Description</th>
                  <th className="px-2 py-2">Product Price</th>
                  <th className="px-2 py-2">Product Details</th>
                  <th scope="col" className="px-2 py-2">
                    <span className="">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-2 py-2">{index + 1}</td>
                    <td className="px-2 py-2">{product.productName}</td>
                    <td className="px-2 py-2">{product.productCategory}</td>
                    <td className="px-2 py-2 flex justify-center">
                      {product.productImage && (
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          className="max-w-[100px] max-h-[100px]"
                        />
                      )}
                    </td>
                    <td className="px-2 py-2">{product.productFreshness}</td>
                    <td className="px-2 py-2">
                      {product.additionalDescription}
                    </td>
                    <td className="px-2 py-2">{product.productPrice}</td>
                    <td className="px-2 py-2">
                      <button
                        onClick={() => {
                          console.log("Product Details Clicked:", product);
                          navigate(`/productdetails/${product.index}`, {
                            state: { product },
                          });
                        }}
                        className="font-medium text-blue-600 hover:underline pr-4"
                      >
                        Details
                      </button>
                    </td>
                    <td className="px-2 py-2">
                      <a
                        href="#"
                        className="pr-2 font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        onClick={() => {
                          console.log("Delete Clicked:", product);
                          handleDeleteConfirmation(product.id);
                        }}
                        className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {productToDelete !== null && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                  <p className="text-lg font-semibold mb-2">
                    Apakah Anda ingin menghapus produk ini?
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        const updatedProductData = [...productData];
                        updatedProductData.splice(productToDelete, 1);
                        setProductData(updatedProductData);
                        setProductToDelete(null);
                      }}
                      className="text-red-600 dark:text-red-400 font-medium mr-2"
                    >
                      Ya
                    </button>
                    <button
                      onClick={() => setProductToDelete(null)}
                      className="text-blue-600 dark:text-blue-400 font-medium"
                    >
                      Tidak
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
