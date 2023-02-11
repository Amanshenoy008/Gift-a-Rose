import { useState } from "react";



const Form = () => {

    const [to,setto]= useState()
    const [from,setfrom]=useState()
    const [message,setmessage]= useState()
    var bb


    const handlesubmit = (e)=>{
        e.preventdefault()
        

    }

    return ( <>
    <div className="form-main">


        <form onSubmit={handlesubmit} >
            <label>To:-</label>
            <input type="text" required  onChange={(e)=>{setto(e.target.value)}} placeholder="Doom Guy \-_-/"/>
            <label>From(<i>Optional</i>):-</label>
            <input type="text" onChange={(e)=>{setfrom(e.target.value)}} />
            <label><b>Message  </b></label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setmessage(e.target.value)}}></textarea>
            <button>Submit</button>
        </form>



    </div>
    
    
    </> );
}
 
export default Form;