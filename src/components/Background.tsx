import { FunctionComponent } from 'react'



const Background: FunctionComponent = (props: any) => {
    return (
        <div className="relative">
            <div className="bg-stone-900 absolute overflow-hidden h-screen w-screen polka z-10">
                <div className="circle-container z-0">
                    <div className="mx-auto my-auto absolute border-r-2 border-t-2  border-stone-600  circle-7xl circle "></div>
                    <div className="mx-auto my-auto absolute border-r-2 border-t-2  border-stone-700  circle-5xl reverse circle "></div>
                    <div className="mx-auto my-auto absolute border-r-2 border-t-2  border-stone-800  circle-3xl circle "></div>
                </div>
                <div className="absolute middle z-50">
                    {props.children}
                </div>
            </div>
        </div>
    )
}


export default Background
