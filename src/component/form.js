import { useState } from "react";



const Form = () => {

    const [to,setto]= useState('')
    const [from,setfrom]=useState('')
    const [message,setmessage]= useState('')
    let bb
    let bnew

    const handlesubmit = (e)=>{
        e.preventDefault()
        bb={
                
                To:to,
                From:from,
                Message:message
                

        }
        
        console.log(bnew)
        
    }

    
   
    
    return ( <>
    <div className="form-main">


        <form onSubmit={handlesubmit}>
            <label>To:-</label>
            <input type="text" onChange={(e)=>setto(e.target.value)} />
            <label>From:-</label>
            <input type="text" onChange={(e)=>setfrom(e.target.value)} />
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setmessage(e.target.value)}></textarea>
            <button>submit</button>
        </form>



    </div>
    
    
    </> );
}
 
export default Form;