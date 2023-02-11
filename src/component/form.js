import { useState } from "react";
import Image from 'next/image'
import Red from '@/../public/red.jpg'
import Yel from '@/../public/yel.jpg'
import Purple from '@/../public/purple.jpg'


const Form = () => {

    const [to,setto]= useState('')
    const [from,setfrom]=useState('')
    const [message,setmessage]= useState('')
    const [date,setdate]=useState('')
    let bb
    let bnew

    const handlesubmit = (e)=>{
        e.preventDefault()
        bb={
                
                To:to,
                From:from,
                Message:message,
                Date:date
        }
        
        console.log(date)
        
    }

    const handleclick=()=>{

    }

    
   
    
    return ( <>
    <div className="form-main">


        <form onSubmit={handlesubmit} className="ff">
            <label>To:-</label>
            <input type="text" onChange={(e)=>setto(e.target.value)} />
            <label>From:-</label>
            <input type="text" onChange={(e)=>setfrom(e.target.value)} />
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setmessage(e.target.value)}></textarea>
            <div className="flex-btn">
            <button>submit</button>

            <input type="date" required onChange={(e)=>{setdate(e.target.value)}}/>
            </div>
        </form>

        <div className="flex-this">  
            
                <Image src={Red} alt=":-(" onClick={handleclick} className="i1"/>
                <Image src={Yel} alt=":-(" onClick={handleclick} className="i2"/>
                <Image src={Purple} alt=":-(" onClick={handleclick} className="i3"/>
            
        </div>



    </div>
    
    
    </> );
}
 
export default Form;