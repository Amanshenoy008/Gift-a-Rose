import { FcSms } from "react-icons/fc"
import { FcLike } from "react-icons/fc";




const Bnav = () => {

    const handleclick1=()=>{
        
    }
    return ( <>
    <div className="bnav-main">
            <div>
                <FcSms className="l1"  onClick={handleclick1}/>

            </div>

            <div>

                <FcLike className="l2" />

            </div>


    </div>
    </> );
}
 
export default Bnav;