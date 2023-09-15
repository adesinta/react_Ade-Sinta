import { useState } from "react";
const Form = () => {
    const [productName, setProductName] = useState('')
    
    const handleProductNameChange = (e) => {
      const value = e.target.value;
      setProductName(value)

      if(value.length > 25){
        alert("Product Name must be at least 25 characters.")
        return
      } 
    }

    const handleClick = () => {
      if (productName.trim() === '') {
        alert("Please enter a valid product name.")
        return
      }

      const randomNumber = Math.floor(Math.random() * 100);
      console.log("Random Number : ", randomNumber);
    }

  return (
    <div>
      <div className="mt-14 flex flex-col items-center gap-1">
        <h4 className="mb-2 text-lg font-semibold pr-[380px]">
          Detail Product
        </h4>
        <div className="flex flex-col items-center gap-1">
          <label className="pr-[395px]">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            onChange={handleProductNameChange}
            className="bg-white  
          border border-gray-300 w-[500px]
         text-gray-900 text-sm rounded-lg  p-2.5 "
            required
          />
        </div>
        <div className="pt-4">
          <label className="pr-[370px]">
            Product Category
          </label>
          <select
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-[500px] p-2.5 "
          >
            <option selected disabled value>
              Choose...
            </option>
            <option value="US">Hijab</option>
            <option value="CA">Hoodie</option>
            <option value="FR">Sweater</option>
            <option value="DE">T-shirt</option>
          </select>
        </div>
        <div className="pt-4">
          <label className="pr-[370px]">
            Image Of Product
          </label>
          <input type="file" className="block w-full border rounded-lg" />
        </div>
        <div className="p-4">
          <label className="pr-[365px]">
            Product Freshness
          </label>
          <div className="flex items-center mb-3 mt-3">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              className="ml-2 text-sm font-normal text-gray-900 pr-[380px]"
            >
              Brand New
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              className="ml-2 text-sm font-normal text-gray-900 pr-[370px]"
            >
              Second Hand
            </label>
          </div>
          <div className="flex items-center mt-3">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              className="ml-2 text-sm font-normal text-gray-900 pr-[370px]"
            >
              Refurbished
            </label>
          </div>
        </div>
        <div>
          <label className="pr-[340px]">
            Additional Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 mt-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex flex-col items-center gap-1">
          <label className="pr-[395px]">
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            placeholder="$ 1"
            className="bg-white  
          border border-gray-300 w-[500px]
         text-gray-900 text-sm rounded-lg  p-2.5 "
            required
          />
        </div>
        <button
        type="button"
        onClick={handleClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[500px]"
      >
        Submit
      </button>
      </div>
    </div>
  );
};

export default Form;
