
import React,{useState} from 'react';
import "./fit.css"

const Fit=()=> {
 
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [phone,setPhone]=useState(0);
 const [address,setAdd]=useState('');


let sub_fm = (e) => 
{
    e.preventDefault();
    if(phone===0||email===null||address===null||name===null)
    {
      alert('please enter all details')
    }
}

  return (
    
    <div className="App">
      
      <div className='container'>
      
      
             
          <h2>Fitness Club Registration</h2>

          <form id='f' onSubmit={sub_fm}>

            <div>
              
              <input type='text' placeholder='Name' value={name} onChange={(e1)=>setName(e1.target.value)}/>
            </div>

            <div >
              
              <input type='text' placeholder='Email' value={email} onChange={(e2)=>setEmail(e2.target.value)}/>
            </div>

            <div >
           
              <input type='text' placeholder='Phone no.' value={phone} onChange={(e3)=>setPhone(e3.target.value)}/>
            </div>

            <div >
              
              <input type='text' placeholder='Address' value={address} onChange={(e4)=>setAdd(e4.target.value)}/>
            </div>

 
            <div >
              <button className='btn' type='submit'>Add members</button>
              
            </div>

        

          </form>
          

      </div>

      <div id='mb'>
              <button className='btn' type='submit'>View MemberList</button>
              
            </div>

    </div>

     
  );
}

export default Fit;
