import Email from "./Email";
import Message from "./Message";
import Subscribe from "./Subscribe";

const Footer2=()=>{
    return(
        <div className="footer-lower">
            <Message/>
            <Email/>
            <Subscribe/>
        </div>
    );
};
export default Footer2;