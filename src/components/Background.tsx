import { FunctionComponent } from 'react'

const Background: FunctionComponent = (props: any) => {
    return (
        <div className="bg-black z-0  h-screen w-screen relative overflow-hidden">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className="z-10 absolute border-2 glow border-white circle-center circle-7xl" />
            <div className="z-10 absolute border-2 glow border-white bg-black circle-center circle-7xl" />
            {props.children}
        </div>
    )
}

export default Background
