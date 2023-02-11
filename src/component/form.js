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
    const [sel1,setsel1]=useState(false)
    const [sel2,setsel2]=useState(false)
    const [sel3,setsel3]=useState(false)
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

    const handleclick1=()=>{
        setsel1(true)
        setsel2(false)
        setsel3(false)
    }
    const handleclick2=()=>{
        setsel2(true)
        setsel1(false)
        setsel3(false)
    }
    const handleclick3=()=>{
        setsel2(false)
        setsel1(false)
        setsel3(true)
    }

    
   
    
    return ( <>
    <div className="form-main">


        <form onSubmit={handlesubmit} className="ff">
            <label>To:-</label>
            <input type="text" onChange={(e)=>setto(e.target.value)} className="v1"/>
            <label>From:-(<i>Optional</i>)</label>
            <input type="text" onChange={(e)=>setfrom(e.target.value)} className="v2"/>
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="3" onChange={(e)=>setmessage(e.target.value)}></textarea>
            <div className="flex-btn">
            <button>submit</button>

            <input type="date" required onChange={(e)=>{setdate(e.target.value)}}/>
            </div>
        </form>

        <div className="flex-this">  
            
                <Image src={Red} alt=":-(" onClick={handleclick1} className={(sel1? 'fi1': "i1")}/>
                <Image src={Yel} alt=":-(" onClick={handleclick2} className={sel2? 'fi2' : "i2"}/>
                <Image src={Purple} alt=":-(" onClick={handleclick3} className={sel3? 'fi3' :"i3"}/>
            
        </div>



    </div>
    
    
    </> );
}
 
export default Form;