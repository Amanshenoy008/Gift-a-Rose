import { FcHome } from "react-icons/fc"
import { FcLike } from "react-icons/fc";
import Link from 'next/link'

const Bnav = () => {

    const handleclick1=()=>{
        
    }
    const handleclick2=()=>{

    }
    return ( <>
    <div className="bnav-main">
            
            
            <div><Link href={'/'}>
                <FcHome className="l1"/>
                <p>Home</p>
                </Link>
            </div>

            <div>
                <Link href={'/sent'}>
                <FcLike className="l2" onClick={handleclick2}/>
                <p>Received</p>
                </Link>
            </div>
            


    </div>
    </> );
}
 
export default Bnav;