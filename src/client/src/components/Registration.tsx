import useStore from '../utils/state'
import { supabase } from '../utils/supabaseClient'
import Input from './Input'




export default function Registration() {

    const handleRegistration = async (email: string, password: string, fullname:string, username:string) => {
      const { error, data } =
           await supabase.auth.signUp({ email, password })
      if (!error && !data.user) alert('Check your email for the login link!')
      if (error) alert(error.message)
    }



  const {email, pw, username, fullname, setUsername, setFullname, setEmail, setPw, setShowRegistration} = useStore();
  return (
    <div>Registration

          <Input value={fullname} type="input" placeholder="Your Full name" handler={setFullname}/>
          <Input value={username} type="input" placeholder="Your Username" handler={setUsername}/>
          <Input value={email} type="email" placeholder="Your Email" handler={setEmail}/>
          <Input value={pw} type="password" placeholder="Your Password" handler={setPw}/>

            <div className="flex flex-row mt-4">
            <button className="mr-2 py-4 bg-slate-700 w-full rounded
            text-blue-50 font-bold " onClick={() => handleRegistration(email,
            pw, fullname, username)}>
            Login
            </button>
            <button className="ml-2 py-4 bg-slate-700 w-full rounded
            text-blue-50 font-bold " onClick={() => setShowRegistration(false)}>
            Back
            </button>
            </div>
</div>
  )
}
