import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => { 

      const navigate=useNavigate();
  return (
    <div className='homepage' style={{display:"flex" ,height:"100vh", width:"100%" ,alignItems:"center" ,justifyContent:"center", gap:"20px",flexDirection:"column" }} >  
        
          <div className="buttons" style={{display:"flex" ,flexDirection:"row" ,gap:"20px"}} >
               <div   className="singn" 
                 onClick={()=>navigate("/login")}
                 style={{cursor:"pointer" ,height:"40px", width:"100px", background:" #2aada0", display:"flex" ,alignItems:"center" ,justifyContent:"center" }}
               >Login Here</div>
               <div   onClick={()=>navigate("/signup")}
                style={{cursor:"pointer" ,height:"40px", width:"100px", background:" #2aada0", display:"flex" ,alignItems:"center" ,justifyContent:"center" }}
               className="signup">SignUp Here</div>
          </div>
   
    </div>
  )
}

export default HomePage
