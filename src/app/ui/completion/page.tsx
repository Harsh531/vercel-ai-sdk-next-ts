"use client";
import React, { useState } from 'react'

export default function CompletionPage() {
    const [prompt, setPrompt] = useState(""); // user input
    const [completion, setCompletion] = useState("") // AI Response text
    const [isLoading, setIsLoading] = useState(false) // loading
    const [error, setError] = useState<string | null>(null) // error

    const onComplete = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        setPrompt("")
        try {
            const response = await fetch("/api/completion", {
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


            setCompletion(`Prompt: \n${prompt}\n\nResponse: \n${data.text}`);
        } catch (error) {
            setIsLoading(false);
            setCompletion("");
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
                        <h2 className="text-lg font-semibold">Generate Text</h2>
                    </div>

                    <div className='flex-1 flex flex-col overflow-y-auto  bg-gray-50'>
                        {error && <div className='text-red-500 mb-4 p-4'>{error}</div>}
                        {!error && (isLoading ? (
                            <div className="flex p-4 animate-pulse">Loading...</div>
                        ) :
                            completion ? (
                                <div>
                                    {/* <div>{prompt}</div> */}
                                    <div className='whitespace-pre-wrap px-4 py-2'>{completion}</div>
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
