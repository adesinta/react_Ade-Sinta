import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Navbar from "../components/Navbar";
import Input from "../components/Input";

const WritingAssistant = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    setLoading(true);
    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 300,
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
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen">
        <div className="container mx-auto p-6 flex flex-col gap-y-6 justify-center items-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            AI Writing Assistant
          </h2>
          <div className="">
            <Input
              id={"writingAssistant"}
              placeholder={"Start writing..."}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-none bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:border-teal-500"
            />
          </div>
          <button
            onClick={handleGenerateContent}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
          >
            Generate Content
          </button>
          <div className="">
            <textarea
              value={result}
              readOnly
              className="w-80 h-80 rounded-md shadow-md px-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-500 border-none focus:outline-none focus:ring focus:border-teal-500"
            ></textarea>
            {loading && (
              <div className="mt-4 text-red-800 font-semibold">
                Please wait, generating content...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WritingAssistant;
