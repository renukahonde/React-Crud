import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';




export default function Create() {

     const [name,setName]=useState("");
     //(MISTAKES) const [name,setName]=useState[""];
     //(MISTAKES)  const [Name,setName]=useState[""];
     const [email,setEmail]=useState("");
     const history = useNavigate();
     
    


     //const header={"Access-Control-Allow-Origin":"*"};
     

     const handleSubmit=(e)=>{
        //missed adding prevent deafult -data not loaded in api  & error showed
        e.preventDefault();
        console.log("submit button clicked")
        axios.post(
            'https://63f7564f833c7c9c6081c6c6.mockapi.io/crud-react',
            {name:name,
            email:email,
           // header,
            
           }

        )
        .then(() =>{
           history("/read");
        });
          
         
     };

return (
    <>
     <h2> Create page !!!!!</h2>
      <form>
      <div className="mb-3">
        <label for="exampleInputPassword1" 
         className="form-label">Name</label>
         <input type="text" className="form-control" 
         onChange={(e)=>setName(e.target.value)}
         //(MISTAKES) onChange={()=>setName(e.target.value)}
        />
     </div>


  <div className="mb-3">
     <label for="exampleInputEmail1" className="form-label">Email address</label>
     <input type="email"
      className="form-control" 
       aria-describedby="emailHelp"
       onChange={(e)=>setEmail(e.target.value)}
      />
    
  </div>
  {name}
  {email}
 
  {/* //{Name}
 // {Email} */}

<button type="submit" className="btn btn-primary" onClick={handleSubmit}
 >Submit</button>
</form>
    
    
    </>
    )
  
}
