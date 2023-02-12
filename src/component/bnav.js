import { FcSms } from "react-icons/fc"
import { FcLike } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";



const Bnav = () => {

    const handleclick1=()=>{
        
    }
    const handleclick2=()=>{

    }
    return ( <>
    <div className="bnav-main">
            <div>
                <FcSms className="l1"  onClick={handleclick1}/>
                <p>Sent</p>
            </div>

            <div>

                <FcLike className="l2" onClick={handleclick2}/>
                <p>Received</p>
            </div>


    </div>
    </> );
}
 
export default Bnav;