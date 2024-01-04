import React, { useState } from 'react'
import Child1 from './Child1';

const Parent = () => {
  let [val,setVal]=useState(0);
  return (
    <div>
      <Child1 data={val}/>
    </div>
  )
}

export default Parent;
