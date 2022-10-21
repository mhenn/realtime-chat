import { useState } from 'react'
import useStore from '../utils/state'
import { supabase } from '../utils/supabaseClient'
import Input from './Input'


export default function Auth() {
  const {email, pw, setEmail, setPw} = useStore();
  const [loading, setLoading] = useState('')

  const handleLogin = async (type: string, email: string, password: string) => {
    setLoading(type)
    const { error, data } =
      type === 'LOGIN'
        ? await supabase.auth.signInWithPassword({
            email:email ,
            password: password})
        : await supabase.auth.signUp({ email, password })
    if (!error && !data.user) alert('Check your email for the login link!')
    if (error) alert(error.message)
    setLoading('')
  }

  return (
    <div className="row w-1/3 flex-col flex mx-auto">
      <div className=" w-full  m-auto bg-stone-800 p-4 rounded-lg text-gray-200 font-mono" >
        <h1 className="header">Supabase + React</h1>
        {loading ? (
          ' Magic ...'
        ) : (
          <form>
          <div className="flex flex-col">
          <Input value={email} type="email" placeholder="Your Email" handler={setEmail}/>
          <Input value={pw} type="password" placeholder="Your Password" handler={setPw}/>
            </div>
            <div className="flex flex-row mt-4">
            <button className="mr-2 py-4 bg-slate-700 w-full rounded
            text-blue-50 font-bold " onClick={() => handleLogin("LOGIN", email,
            pw)}>
            Login
            </button>
            <button className="ml-2 py-4 bg-slate-700 w-full rounded
            text-blue-50 font-bold " onClick={() => handleLogin("SIGNUP",
            email, pw)}>
             Sign up
            </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
