import { useState } from 'react'
import useStore from '../utils/state'
import { supabase } from '../utils/supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const {email, setMail} = useStore()

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault()

      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      alert('Check your email for the login link!')
  }


  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setMail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
