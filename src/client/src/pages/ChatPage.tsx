import SideBar from '../components/SideBar'

import useDetailQuery from '../utils/Queries'
import useStore from '../utils/State'


export default function ChatPage() {
    const { userId } = useStore();
    const { isLoading, error, data } = useDetailQuery(userId);

    const Loading = () => {
        return <span>Loading...</span>
    }

    return (
        <div className="flex flex-row">
            <SideBar />
            <div className="flex flex-col w-5/6 h-screen ml-auto justify-between bg-slate-300">
                <div className="w-full h-full px-3 py-3 ">
                    <div className="w-full h-full bg-slate-500 rounded-md opacity-30 shadow-sm">
                    </div>
                </div>
                <div className="flex flex-row px-3 py-3">
                    <textarea className="w-full mr-2 rounded-md" style={{ resize: 'none' }}>
                    </textarea>
                    <button className="rounded-md bg-blue-500 w-8 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}
