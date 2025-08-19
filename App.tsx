import React, { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [expanded, setExpanded] = useState("");

const handleExpand = async () => {
  if (prompt.trim() === "") {
    setExpanded("⚠️ Please enter a prompt first.");
    return;
  }

  try {
    setExpanded("⏳ Expanding your idea...");
    const response = await fetch("/api/expand", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setExpanded(data.expanded || "⚠️ No expansion returned.");
  } catch (err) {
    console.error(err);
    setExpanded("⚠️ Something went wrong. Try again.");
  }
};


    setExpanded(
      `Here’s a more detailed version of your idea:\n\n"${prompt}" could be built as an interactive app that features:\n- Core functionality (MVP)\n- Expanded functionality (optional add-ons)\n- Testing and iteration phases`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          📝 Prompt Expander
        </h1>

        {/* Input */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your idea here..."
          className="w-full h-28 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        />

        {/* Button */}
        <button
          onClick={handleExpand}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Expand Prompt
        </button>

        {/* Output */}
        {expanded && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl whitespace-pre-line">
            {expanded}
          </div>
        )}
      </div>
    </div>
  );
}
