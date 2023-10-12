import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        // model: "gpt-3.5-turbo",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 500,
      });
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-2/3 bg-white rounded-lg shadow-lg p-4">
        <textarea
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt..."
          className="textarea p-2 rounded-lg border w-full"
        ></textarea>

        <button
          onClick={handleClick}
          disabled={loading || prompt.length === 0}
          className="btn bg-green-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {result && (
        <div className="result mt-4">
          <strong>Output:</strong>
          <pre className="border p-2 rounded-lg bg-gray-100" style={{ whiteSpace: "pre-wrap" }}>
            {result}
          </pre>
        </div>
      )}
      </div>
    </main>
  );
}

export default App;