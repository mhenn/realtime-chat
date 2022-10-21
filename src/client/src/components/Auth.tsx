import { useState } from 'react'
import useStore from '../utils/state'
import { supabase } from '../utils/supabaseClient'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      <div className=" w-full  m-auto bg-stone-800 p-4 rounded-lg text-gray-200 font-mono" aria-live="polite">
        <h1 className="header">Supabase + React</h1>
        {loading ? (
          ' Magic ...'
        ) : (
          <form>
          <div className="flex flex-col">
            <input
              id="email"
              className="mt-4 text-gray-800 rounded w-full py-3 px-8 bg-slate-200 placeholder:font-semibold  hover:ring-1"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
         <input
              id="password"
              className="mt-4 w-full py-3 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1  "
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="flex flex-row mt-4">
            <button className="mr-2 py-4 bg-slate-700 w-full rounded text-blue-50 font-bold " aria-live="polite" onClick={() => handleLogin("LOGIN", email, password)}>
            Login
            </button>
            <button className="ml-2 py-4 bg-slate-700 w-full rounded text-blue-50 font-bold " aria-live="polite" onClick={() => handleLogin("SIGNUP", email, password)}>
             Sign up
            </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
