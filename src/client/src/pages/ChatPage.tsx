import SideBar from '../components/SideBar'

import { useQuery } from '@tanstack/react-query'
import { supabase } from '../utils/supabaseClient'
import useStore from '../utils/state'
import { JsxElement } from 'typescript';

const userDetailQuery = (id: string) => ({
    queryKey: ["users", id],
    queryFn: async () => {
        return supabase.from('users').select('*')
    }
});

export default function ChatPage() {
    const { userId } = useStore();
    const { isLoading, error, data } = useQuery(userDetailQuery(userId));

    const Loading = () => {
        return <span>Loading...</span>
    }


    const Switch = (props: JsxElement) => {

        return isLoading ? <Loading /> : { props }
    }
    return (


        <div className="flex flex-col">
            <SideBar />
            <div className="flex flex-col w-5/6 h-screen ml-auto">
                <div className="w-1/2">

                </div>
                <textarea>
                </textarea>
            </div>
        </div>
    )
}
