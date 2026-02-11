
"use client";

import { useChat } from "@ai-sdk/react";
import React, { useState } from "react";

export default function ChatPage() {
    const [input, setInput] = useState("");
    const { messages, sendMessage, status, error, stop } = useChat();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage({ text: input });
        setInput("")
    }

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            {error && (
                <div className="text-red-500 mb-4">{error.message}</div>
            )}

            {/* message area */}
            {messages?.map((message) => {
                return (
                    <div key={message.id} className="mb-4">
                        <div className="font-semibold">{message.role === "user" ? "You" : message.role === "assistant" ? "AI" : "Unknown"}</div>
                        {
                            message.parts.map((part, index) => {
                                switch (part.type) {
                                    case "text": {
                                        return (
                                            <div key={`${message.id}-${index}`} className="whitespace-pre-wrap">
                                                {part.text}
                                            </div>
                                        )
                                    }
                                    default: {
                                        return null
                                    }
                                }
                            })
                        }
                    </div>
                )

            })}

            {(status === "submitted" || status === "streaming") && (
                <div className="mb-4">
                    <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md left-0 right-0 p-4 mx-auto bg-zinc-50 ">
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Hi, how can I help you?" className="flex-1 px-2 py-1 border border-gray-300 rounded"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {
                        status === "submitted" || status === "streaming" ? (
                            <button onClick={stop} className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed">Stop</button>
                        ) : (
                            <button type="submit" disabled={status !== "ready"} className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed">Send</button>
                        )
                    }


                </div>
            </form>
        </div>
    )
}
