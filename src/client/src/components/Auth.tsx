import useStore from '../utils/state'
import Login from './Login'
import Registration from './Registration'

export default function Auth() {

  const {showRegistration } = useStore();

  return (
    <div className="row w-1/3 flex-col flex mx-auto">
      <div className=" w-full  m-auto bg-stone-800 p-4 rounded-lg text-gray-200 font-mono" >
        <h1 className="header">Supabase + React</h1>
          <form>
            {showRegistration ? <Registration/> :<Login/>}
          </form>
      </div>
    </div>
  )
}
