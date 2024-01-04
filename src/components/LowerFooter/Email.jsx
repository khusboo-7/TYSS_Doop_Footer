import { createRef } from "react";

const Email=()=>{
    let emailRef=createRef();
    let handleChange=e=>{
        let emailAddress=emailRef.current.value;
    };
    return(
        <div className="email">
            <input type="text" placeholder="Email Address"  ref={emailRef}/>
        </div>
    );
};
export default Email;