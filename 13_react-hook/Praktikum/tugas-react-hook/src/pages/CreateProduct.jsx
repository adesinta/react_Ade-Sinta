import { useEffect } from "react";
import tailwindLogo from "../assets/tailwind-logo.png"
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const CreateProduct = () => {
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <img src={tailwindLogo} alt="" width={70} />
        <h1 className="font-semibold text-3xl">{article.title.en}</h1>
        <p className="w-[750px] text-center">{article.description.en}</p>
      </div>
      <Form />
    </div>
  );
};

export default CreateProduct;
