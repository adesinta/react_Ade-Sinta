import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Navbar from "../components/Navbar";
import Input from "../components/Input";

const Chat = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResult = async () => {
    setLoading(true);
    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
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

  console.log("result", result);

  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex flex-col gap-y-5 justify-center items-center">
      <div className="w-full flex justify-center gap-x-2">
        <Input 
        id={"openai"} 
        placeholder={"type your input here..."}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)} />
        <button
          onClick={handleResult}
          className=" bg-blue-700 hover:bg-blue-800 text-white w-28 rounded"
        >
          Click
        </button>
      </div>
      <div className="h-80">
        <textarea
        value={result}
        onChange={(e) => setResult(e.target.value)} className="w-[32.5rem] h-full rounded-md shadow-md"></textarea>
        {loading === true && (
          <div className="font-semibold text-red-500">
            Please Wait, your prompt in progress
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Chat;
