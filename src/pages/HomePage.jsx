import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => { 

      const navigate=useNavigate();
  return (
    <div className='homepage' >  
        
          <div className="buttons">
               <div    className="singn" 
                 onClick={()=>navigate("/login")}
                 style={{cursor:"pointer"}}
               >Login Here</div>
               <div   onClick={()=>navigate("/signup")}
                 style={{cursor:"pointer"}}
               className="signup">SignUp Here</div>
          </div>
   
    </div>
  )
}

export default HomePage
