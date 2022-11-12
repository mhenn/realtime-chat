import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'



const Chat = () => {

    const [chat, setChat] = useState<string[]>([])
    const [msg, setMsg] = useState<string>()

    useEffect((): any => {
        socketInit()
        const socket = io({ path: '/api/socketio' })

        socket.on("message", (message: string) => {
            console.log(message)
        })

        if (socket) return () => socket.disconnect();

    }, [])

    const socketInit = async () => {
    }

    const sendMessage = async () => {
        let res = await fetch('/api/chat/bob', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify("get fucked"),
        })

    }

    return (
        <>
            <Head>
                <title>Chat</title>
                <meta name="description" content="chat-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-row w-screen h-screen">
                <aside className=" w-1/5 h-screen bg-blue-50">a</aside>
                <div className="w-full h-full">
                    <div className="bg-red-300 h-5/6 px-5 pt-5">
                        <div className="bg-blue-300 w-full h-full"></div>
                    </div>
                    <div className="border-green-400"> a</div>
                </div>
            </main>
        </>
    )
}

export default Chat
