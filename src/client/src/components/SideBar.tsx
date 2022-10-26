
export default function SideBar() {
    return (
        <div className="flex flex-col bg-slate-700 w-1/6 h-screen px-4 tex-gray-900 border border-purple-900">
            <div className="flex flex-wrap mt-8">
                <div className="w-1/2">
                    <img
                        src="https://randomuser.me/api/portraits/women/27.jpg"
                        className="mx-auto w-20 h-20 rounded-full"
                    />
                </div>
                <div className="w-1/2">
                    <span className="font-semibold text-white">Ava Harper</span>
                </div>
            </div>
            <div className="mt-10 mb-4">
                <ul className="ml-4">
                    <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                        <span>
                            <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                <path
                                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                                ></path>
                            </svg>
                        </span>
                        <a href="#">
                            <span className="ml-2">Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
