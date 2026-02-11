"use client";

import { useState } from "react";

export default function GenerateObjectPage() {
  const [prompt, setPrompt] = useState(""); // user input
  const [completion, setCompletion] = useState(null) // AI Response text
  const [isLoading, setIsLoading] = useState(false) // loading
  const [error, setError] = useState<string | null>(null) // error


  const onComplete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setPrompt("")
    try {
      const response = await fetch("/api/generate-object", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      })
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }


      // setCompletion(`Prompt: \n${prompt}\n\nResponse: \n${JSON.stringify(data.recipe)}`);
      setCompletion(data.recipe);
    } catch (error) {
      setIsLoading(false);
      setCompletion(null);
      setError(error instanceof Error ? error.message : "Something went wrong");

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container h-full w-full flex flex-col mx-auto p-4 overflow-hidden">

      <div className="h-[80vh] flex flex-col border border-gray-300 rounded">

        {/* header and message area */}
        <div className="flex-1 flex flex-col max-h-[470vh] overflow-hidden">

          <div className="flex p-4 border-b  border-gray-300">
            <h2 className="text-lg font-semibold">Structured Response / <span className="text-green-400">Recipe Generator</span></h2>
          </div>

          <div className='flex-1 flex flex-col overflow-y-auto  bg-gray-50'>
            {error && <div className='text-red-500 mb-4 p-4'>{error}</div>}
            {!error && (isLoading ? (
              <div className="flex p-4 animate-pulse">Loading...</div>
            ) :
              completion ? (
                <div className="flex flex-col px-4 py-2 gap-2">
                  <h4 className="font-semibold">{completion.name}</h4>

                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold">Ingredients:</h4>
                    <div className="flex items-center gap-2">
                      {completion.ingredients.map((ingredient, index) => (
                        <div key={index} className="border rounded-sm p-2">
                          <h4 className="font-semibold">{ingredient.name}</h4>
                          <p>{ingredient.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold">Steps:</h4>
                    {completion.steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <h4>{index + 1}.</h4>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* <div className='whitespace-pre-wrap px-4 py-2'>{completion}</div> */}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-4 ">Ask your question !</div>
              )
            )}
          </div>
        </div>

        {/* input form */}
        <form onSubmit={onComplete} className="flex flex-row gap-2 p-2">
          <input type="text" placeholder='Ask me anything!' className="flex-1 px-2 py-1 border border-gray-300 rounded"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>

    </div>
  )
}
