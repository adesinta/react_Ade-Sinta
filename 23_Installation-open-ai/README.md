# (23) Installation OpenAI in React

### Kenapa OpenAI ?
1. Gratis (trial)
2. Dipakai banyak user
3. Mudah di pasang
4. Jumlah parameter : 175 M (model davinci 03)

### Starting Point
Setiap code pada ppt di upload di github : https://github.com/attoyibi/open-api/tree/main/basic-installation

API reference : https://platform.openai.com/docs/api-reference

Link Documentation for OPENAI : https://platform.openai.com/docs/introduction 

### Pemasangan OPEN.AI di react 
1. Membuat react project
2. Install OpenAI package 
   ```
   npm install openai
   ```

3. Import module yang diperlukan
   ```
   import {useState} from "react";
   import {Configuration, OpenAIApi} from "openai"
   ```

4. Deklarasi Objek
   ```
   const configuration = new Configuration ({
    apiKey: "Masukkan_api_key"
   })
   
   Const openai = new OpenAIApi(configuration)
   ```

5. Deklarasi State
   ```
   const [prompt, setPrompt] = useState("");
   const [result, setResult] = useState("");
   const [loading, setLoading] = useState(false);
   ```

6. Deklarasi HhandleClick
   ```
   const handleClick = async () => {
    setLoading(true);
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 100,
        });
        setResult(response?.data?.choices[0].text);
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
   }
   ```

7. Rendering Component
   ```
     <main className="main">
      <div className="w-2/4 mx-auto">
        <textarea
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt.."
          className="textarea"
        ></textarea>

        <button
          onClick={handleClick}
          disabled={loading || prompt.length === 0}
          className="btn"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        <pre className="result">{result}</pre>
      </div>
    </main>
   ```

### Mendapatkan API KEYS
1. Buka situs web OpenAI di https://platform.openai.com/docs/api-reference
2. Buat akun 
3. Ke Introduction dan masuk kehalaman API Keys https://platform.openai.com/account/api-keys
4. Create new secret key
