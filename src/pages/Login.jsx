import React from 'react'

import "../css/login.scss";
import {Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";


// import { useLogin } from '../contexts/loginContext';


const Login = () => {

        const [username,setUserName]=useState("")
        const [password,setPassword]=useState("");

        // const [login,setLogin]=useLogin();
      

        const navigate=useNavigate();

        // const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        
        const handleSubmit=async(e)=>{  
             
           e.preventDefault();  

             
          try { 
                 const {data}= await axios.post(`${process.env.REACT_APP_BACKENDURL}/api/v1/auth/login`,{username,password});
                 console.log(data);
                //  console.log(data?.token);
                 if(data?.success)
                 {
                    toast.success(data.message);
                     localStorage.setItem('token',data?.token);
                    //  localStorage.setItem('user',JSON.stringify(data?.user));

                    //  setLogin(true);
                    navigate("/");
                    
                
                 }
                 else{
                     toast.error(data.message);
                 }
                 
            
          } catch (error) { 
                  console.log(error);  
                  toast.error(error)         
                  
          }
        }



  return (
  
    
<form  onSubmit={handleSubmit}  >
<div className="container1">
          <div className="insidecontainer2">
                <div className="upper">
                   <div className="sign">SIGN IN</div>
                   <div className="logo"> <FaUser /> </div>
                </div>
                <div className="bottom">
                   <div className="username">
                    <span className="usericon">  <FaUser/> </span>
                    <input type="text" 
                        placeholder='username'
                        className='usertext'
                        required
                              value={username}
                             onChange={(e)=>{setUserName(e.target.value)}}
                     />
                   </div>
                   <div className="passwordfield">
                     <span className="lockicon"> <FaUnlock/>  </span>
                     <input type="text"  
                        placeholder='password'
                        className='userpassword'
                            required
           
                       value={password}
                      onChange={(e)=>{setPassword(e.target.value)}} 
                      />
                   </div>
                   <div className="reminder">
                         <div className="rem">  <input type="checkbox" />  <span className='remindeme' >  Remember me </span></div>
                      <span className="forgot">forgot Password ?</span>
                   </div>
                   <button    type="submit" id="submit-btn" className="loginbutton">LOGIN</button>
                </div>
          </div>
    </div>
</form>

    
  );
};



export default Login