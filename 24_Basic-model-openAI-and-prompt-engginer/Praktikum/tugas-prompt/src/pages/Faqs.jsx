import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Input from "../components/Input";

const Faqs = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQnA = async () => {
    setLoading(true);
    const qnaPrompt = `Question: ${prompt}\nAnswer:`;

    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: qnaPrompt,
        temperature: 0.5,
        max_tokens: 3000,
      })
      .then((response) => {
        setResult(response?.data?.choices[0].text);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="bg-[#f3f5fa] flex flex-col py-10 ">
        <div className="flex flex-col justify-center text-center">
        <h1 className="font-bold text-2xl pb-2">Frequently Asked Questions (FaQs)</h1>
          <p className="text-gray-700">
            Welcome to our FAQ section. Here you can find answers to common questions.
          </p>
        </div>
      <div className="flex justify-center w-screen h-full pt-6">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex flex-col items-center gap-4">
            <Input
              id={"qna"}
              placeholder={"Ask a question..."}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-none bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              onClick={handleQnA}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            >
              Ask
            </button>
          </div>
          <div className="mt-8">
            <textarea
              value={result}
              readOnly
              className="w-full h-40 rounded-md shadow-md px-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-500 border-none focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
            {loading && (
              <div className="font-semibold text-red-500 mt-2">
                Please wait, fetching answer...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
