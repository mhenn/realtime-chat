import { type NextPage } from "next";
import Head from "next/head";
import Background from '../components/Background'
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
    return (
        <>
            <Head>
                <title>Realtime-Chat</title>
                <meta name="description" content="chat-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Background>
                <main className="Z-20 container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
                    <h1 className="text-3xl font-extrabold leading-normal text-gray-700 md:text-[4rem]">
                        Realtime-<span className="text-purple-300">React</span>-Chat
                    </h1>
                    <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
                    </div>
                    <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
                        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
                    </div>
                    <Auth />
                </main>
            </Background>
        </>
    );
};

export default Home;

const Auth: React.FC = () => {
    const { data: sessionData } = useSession();

    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined },
    );

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            {sessionData && (
                <p className="text-2xl text-blue-500">
                    Logged in as {sessionData?.user?.name}
                </p>
            )}
            {secretMessage && (
                <p className="text-2xl text-blue-500">{secretMessage}</p>
            )}
            <button
                className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
                onClick={sessionData ? () => signOut() : () => signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};
