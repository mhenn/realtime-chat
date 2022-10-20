import React from 'react'
import useStore from '../utils/state'

function UpdateName(){
    const {user, setName} = useStore();

    return(
        <div>
            <input
                className="text-black"
                value={user}
                onChange={(e) => setName(e.target.value)}
            />

        </div>
    );
}

export default UpdateName
