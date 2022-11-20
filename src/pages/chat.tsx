import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'



const ChatMessage = (msg: string) => {

    return <div>{msg}</div>
}

const Chat = () => {

    const [chat, setChat] = useState<string[]>([])
    const [msg, setMsg] = useState<string>()

    useEffect((): any => {
        socketInit()
        const socket = io({ path: '/api/socketio' })

        socket.on("message", (message: string) => {
            setChat(chat => [...chat, message])
        })

        if (socket) return () => socket.disconnect();

    }, [])

    const socketInit = async () => {
    }

    const sendMessage = async (e) => {
        console.log(chat)

        e.preventDefault()
        let res = await fetch('/api/chat/bob', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(msg),
        })

    }

    return (
        <>
            <Head>
                <title>Chat</title>
                <meta name="description" content="chat-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-stone-900 flex flex-row w-screen h-screen polka">
                <aside className=" w-1/5 h-screen bg-stone-800"></aside>
                <div className="w-full h-full">
                    <div className=" h-5/6 px-5 pt-5">
                        <div className="rounded-md opacity-70 bg-stone-700 text-white w-full h-full">
                            {chat.map((message) => ChatMessage(message))}
                        </div>
                    </div>
                    <form className=" w-full h-1/6">
                        <div className="flex w-full h-full px-5 py-10  ">
                            <textarea className="py-2 px-2 text-white opacity-70 bg-stone-700 h-full w-11/12 rounded-md shadow-md"
                                onChange={(e) => setMsg(e.target.value)}></textarea>
                            <button className="rounded-full w-12 h-12 my-auto shadow-md  ml-5 bg-blue-600 text-white"
                                onClick={(e) => sendMessage(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 my-auto mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>

                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Chat
