import Head from 'next/head'
import React, { useEffect } from 'react'
import { io } from 'socket.io'


let socket

const index = () => {

    useEffect(() => {
        socketInit()
    }, [])

    const socketInit = async () => {
        await fetch("/api/socketio")
        socket = io()
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

export default index
