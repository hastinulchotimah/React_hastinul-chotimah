import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function Reservasi() {
  const configuration = new Configuration({
    apiKey: "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", 
  });
  const openai = new OpenAIApi(configuration);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReserve = async () => {
    if (input.trim() === "") return;

    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        max_tokens: 500, 
      });

      const botMessage = response.data.choices[0].text;
      setOutput(botMessage);
      setInput("");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-96">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik permintaan reservasi Anda..."
          className="p-2 rounded-lg border w-full"
        />
        <button
          onClick={handleReserve}
          disabled={loading}
          className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
        >
          {loading ? "Loading..." : "Kirim Reservasi"}
        </button>
      </div>
      {output && (
        <div className="bg-white rounded-lg shadow-lg p-4 w-96 mt-4">
          <strong>Response:</strong>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}

export default Reservasi;
