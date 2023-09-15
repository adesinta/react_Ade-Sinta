import bootstrapLogo from "../assets/bootstrap-logo.png";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
const CreateProduct = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <img src={bootstrapLogo} alt="" width={70} />
        <h1 className="font-semibold text-3xl">Create Product</h1>
        <p className="w-[750px] text-center">
          Below is an example form built entirely with Bootstraps form controls.
          Each required form group has a validation state that can be triggered
          by attempting to submit the form without completing it.
        </p>
      </div>
      <Form/>
    </div>
  );
};

export default CreateProduct;
