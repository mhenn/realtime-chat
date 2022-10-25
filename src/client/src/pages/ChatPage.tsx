import { useQuery } from '@tanstack/react-query'
import { supabase } from '../utils/supabaseClient'
import useStore from '../utils/state'
import { ReactElement } from 'react';
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


        <div>ChatPage</div>
    )
}
