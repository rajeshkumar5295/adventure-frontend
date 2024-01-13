import React from 'react'

import "../css/login.scss";
import {Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";

const SignUp = () => {

  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("");
  const[dob,setDob]=useState("");
  const[email,setEmail]=useState("");


  
  const navigate=useNavigate();

  // const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

  
  const handleSubmit=async(e)=>{  
       
     e.preventDefault();  

       
    try { 
           const {data}= await axios.post(`${process.env.REACT_APP_BACKENDURL}/api/v1/auth/signup`,{username,password,dob,email});
           console.log(data);
          //  console.log(data?.token);
           if(data?.success)
           {
              toast.success(data.message);
               localStorage.setItem('token',data?.token);
              //  localStorage.setItem('user',JSON.stringify(data?.user));

              //  setLogin(true);
              navigate("/login");
              
          
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
              <div className="insidecontainer2" style={{height:"500px"}} >
                    <div className="upper">
                       <div className="sign">SIGN UP </div>
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
                       <div className="username">
                        <span className="usericon"> <MdMarkEmailUnread /> </span>
                        <input type="email" 
                            placeholder='email'
                            className='usertext'
                            required
                                  value={email}
                                 onChange={(e)=>{setEmail(e.target.value)}}
                         />
                       </div>
                       <div className="username">
                        <span className="usericon">  <BsFillCalendarDateFill/> </span>
                        <input type="date" 
                            placeholder='Date of Birth'
                            className='usertext'
                            required
                                  value={dob}
                                 onChange={(e)=>{setDob(e.target.value)}}
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
                       {/* <div className="reminder">
                             <div className="rem">  <input type="checkbox" />  <span className='remindeme' >  Remember me </span></div>
                          <span className="forgot">forgot Password ?</span>
                       </div> */}
                       <button    type="submit" id="submit-btn" className="loginbutton">Register</button>
                    </div>
              </div>
        </div>
    </form>
    
  )
}

export default SignUp
