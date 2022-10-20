import React from 'react';
import useStore from '../utils/state'

function Counter() {
    const { count, increase} = useStore()
  return (
    <div className="Counter">
        <span>{count}</span>
        <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
