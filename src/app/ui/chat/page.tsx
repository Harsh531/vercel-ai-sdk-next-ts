
"use client";

import { useChat } from "@ai-sdk/react";
import { Bot, User } from "lucide-react";
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
        <div className="flex flex-1 px-4 py-4 relative overflow-hidden">
            <div className="flex flex-col rounded-sm w-full border  mx-auto  relative  container overflow-y-auto ">


                <div className="flex-1 flex flex-col max-h-[470vh] overflow-hidden">

                    <div className="flex p-4 border-b  border-gray-300">
                        <h2 className="text-lg font-semibold">Chat Message</h2>
                    </div>
                    <div className="flex flex-col min-h-[87%] h-fit overflow-y-auto w-full   mx-auto stretch relative  ">
                        {error && (
                            <div className="text-red-500 mb-4">{error.message}</div>
                        )}


                        {(status === "submitted" || status === "streaming") && (
                            <div className="mb-4 p-4">
                                <div className="flex items-center gap-2">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                                </div>
                            </div>
                        )}


                        {/* message area */}
                        {messages?.length === 0 ? (
                            <div>
                                <p className="text-center text-gray-500 mt-4">No messages yet. Start the conversation!</p>
                            </div>
                        ) :
                            messages?.map((message) => {
                                return (
                                    <div key={message.id} className={`mb-4 px-4 py-2  rounded ${message.role === "user" ? "border" : "bg-gray-100"}`}>
                                        <div className="font-bold border p-1 rounded-sm w-fit">{message.role === "user" ? <User /> : message.role === "assistant" ? <Bot /> : "Unknown"}</div>
                                        {
                                            message.parts.map((part, index) => {
                                                switch (part.type) {
                                                    case "text": {
                                                        return (
                                                            <div key={`${message.id}-${index}`} className="whitespace-pre-wrap px-4">
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
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="   w-full  p-4 mx-auto bg-zinc-50 ">
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
        </div>
    )
}
