import { useMutation } from "@tanstack/react-query"
import useStore from '../utils/state'
import { supabase } from '../utils/supabaseClient'
import Input from './Input'

interface User {
    username: string,
    fullname: string,
    email: string,
    password: string

}

export default function Registration() {
    const { email, pw, username, fullname, setUsername, setFullname, setEmail, setPw, setShowRegistration } = useStore();

    const handleRegistration = async (user: User) => {
        const { error: signUpError, data } =
            await supabase.auth.signUp({ email: user.email, password: user.password })
        if (!signUpError && !data.user) alert('Check your email for the login link!')
        if (signUpError) throw signUpError

        return data
    }

    const useCreateUser = (user: User) => {
        return useMutation(() => handleRegistration(user), {
            onSuccess: async (data) => {
                const { data: insertData, error: insertError } = await supabase.from('users').insert({
                    id: data.user?.id,
                    name: user.fullname,
                    username: user.username,
                })

                if (insertError) throw insertError

                return insertData
            }
        })
    }

    const createMutation = useCreateUser({
        username: username,
        fullname: fullname,
        email: email,
        password: pw
    });

    return (
        <div>Registration
            <Input value={fullname} type="input" placeholder="Your Full name" handler={setFullname} />
            <Input value={username} type="input" placeholder="Your Username" handler={setUsername} />
            <Input value={email} type="email" placeholder="Your Email" handler={setEmail} />
            <Input value={pw} type="password" placeholder="Your Password" handler={setPw} />

            <div className="flex flex-row mt-4">
                <button className="mr-2 py-4 bg-slate-700 w-full rounded
            text-blue-50 font-bold " onClick={() => createMutation.mutate()}>
                    Register
                </button>
                <button className="ml-2 py-4 bg-slate-700 w-full rounded
            text-blue-50 font-bold " onClick={() => setShowRegistration(false)}>
                    Back
                </button>
            </div>
        </div>
    )
}
