"use client";

import { useCompletion } from "@ai-sdk/react"
import React from "react";


export function ScreamUIPage() {
    return (
        <div>Stream page</div>
    )
}

export default function StreamPage() {
    const { input, setInput, handleInputChange, handleSubmit, completion, isLoading, error, stop } = useCompletion({
        api: "/api/stream",
    });


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setInput("");
        handleSubmit(e)
    }

    return (
        <div className="container h-full w-full flex flex-col mx-auto p-4 overflow-hidden">

            <div className="h-[80vh] flex flex-col border border-gray-300 rounded">

                {/* header and message area */}
                <div className="flex-1 flex flex-col max-h-[470vh] overflow-hidden">

                    <div className="flex p-4 border-b  border-gray-300">
                        <h2 className="text-lg font-semibold">Stream Text</h2>
                    </div>

                    <div className='flex-1 flex flex-col px-4 py-2 overflow-y-auto  bg-gray-50'>
                        {error && (
                            <div className="text-red-500 mb-4">{error.message}</div>
                        )}
                        {isLoading && !completion && (
                            <div className="flex animate-pulse">Loading...</div>
                        )}
                        {completion && (<div className="whitespace-pre-wrap transition-all duration-300 ease-in-out">{completion}</div>)}
                    </div>
                </div>

                {/* input form */}
                <form onSubmit={onSubmit} className="flex flex-row gap-2 p-2">
                    <input type="text" placeholder='Ask me anything!' className="flex-1 px-2 py-1 border border-gray-300 rounded"
                        value={input}
                        onChange={handleInputChange}
                    />

                    <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-200">Send</button>
                    <button disabled={!isLoading} onClick={stop} className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-red-200">Stop</button>

                </form>
            </div>

        </div>
    )
}
