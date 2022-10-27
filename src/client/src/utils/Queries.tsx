import { useQuery } from '@tanstack/react-query'
import { supabase } from '../utils/supabaseClient'


const useDetailQuery = (id: string) => {
    return useQuery(userDetail(id))
};

const userDetail = (id: string) => ({
    queryKey: ["users", id],
    queryFn: async () => {
        return supabase.from('users').select('*')
    }
});


export default useDetailQuery;
