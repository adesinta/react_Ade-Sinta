import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex gap-12">
        <div>
          {product.productImage && (
            <img
              src={URL.createObjectURL(product.productImage)}
              alt={product.productName}
              className="max-w-[500px] max-h-[500px] rounded-3xl shadow-2xl"
            />
          )}
          <div className="flex justify-center pt-4">
            <button
              className="bg-blue-700 w-24 h-10 rounded-lg text-white hover:bg-blue-800"
              onClick={() => {
                navigate(`/createproduct`);
              }}
            >
              Back
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl font-semibold pb-6">Details Product</h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-blue-800 font-mono font-semibold text-xl">
                - {product.productName} -
              </h2>

              <p>Category : {product.productCategory}</p>
              <p>Freshness : {product.productFreshness}</p>
              <p className="pb-4">
                Description : {product.additionalDescription}
              </p>
            </div>
            <p className="pb-2 text-orange-500 font-bold text-xl">
              Rp. {product.productPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
