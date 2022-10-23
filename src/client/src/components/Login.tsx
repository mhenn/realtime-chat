import { supabase } from '../utils/supabaseClient'
import useStore from '../utils/state'

import Input from './Input'




export default function Login() {
    const { email, pw, setEmail, setPw, setShowRegistration } = useStore();

    const handleLogin = async (mail: string, password: string) => {
        console.log("ag:" + mail);
        console.log(password);
        const { error, data } =
            await supabase.auth.signInWithPassword({
                email: mail,
                password: password
            })
        console.log(error);
        console.log(data);
        if (!error && !data.user) alert('Check your email for the login link!')
        if (error) alert(error.message)
    }


    return (
        <div className="flex flex-col">
            <Input value={email} type="email" placeholder="Your Email" handler={setEmail} />
            <Input value={pw} type="password" placeholder="Your Password" handler={setPw} />

            <div className="flex flex-row mt-4">
                <button className="mr-2 py-4 bg-slate-700 w-full rounded
        text-blue-50 font-bold " onClick={() => handleLogin(email,
                    pw)}>
                    Login
                </button>
                <button className="ml-2 py-4 bg-slate-700 w-full rounded
        text-blue-50 font-bold " onClick={() => setShowRegistration(true)}>
                    Sign up
                </button>

            </div>
        </div>
    )
}
