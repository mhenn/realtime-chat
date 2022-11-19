import { FunctionComponent } from 'react'



const Background: FunctionComponent = (props: any) => {
    return (
        <>
            <div className="bg-stone-900 h-screen w-screen polka">
                <div className="mx-auto my-auto absolute border-r-2 border-t-2  border-stone-700  circle-7xl circle-center ">
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </>
    )
}


export default Background
