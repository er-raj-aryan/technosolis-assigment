import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const BASE_URL="http://localhost:8080";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL).then( res => {
      console.log('Server is running',res);
    }).catch(err => {
      console.log("error",err)
    })
  },[])

 function handleLoginSubmit(e) {
    e.preventDefault();
    let registerFormData = {
      email: loginEmail,
      password: loginPassword,
    };
    const RegisterData = JSON.parse(Cookies.get("RegisterData"));
    if(RegisterData.email === loginEmail && RegisterData.password === loginPassword) {
      axios.post(`${BASE_URL}/login`,registerFormData).then(res => {
        if(res.data){
          setResponseData(res.data)
        }
      }).catch(error => {
        console.log("Error",error);
      })
    }
    else {
      setResponseData({message:"Invalid username and password "})
    }
  };

  const handleLoginEmail = (e) => {
    const tEmail = e.target.value;
    setLoginEmail(tEmail);
  }
  
  const handleLoginPassword = (e) => {
    const tPassword = e.target.value;
    setLoginPassword(tPassword);
  }


  return (
    <div>
      {/* login  */}
      <h1>Login</h1>
      <div>
        <form action="" method="POST" onSubmit={handleLoginSubmit} style={{display:"flex",gap:20}}>
          <div style={{display:"flex",flexDirection:'column',gap:20}} >
            <div style={{display:"flex",gap:20}}>
              <label>Email</label>
              <input  required type="email" value={loginEmail} onChange={handleLoginEmail} />
            </div>
            <div style={{display:"flex",gap:20}}>
              <label >Password</label>
              <input name="password" type="password" required value={loginPassword} onChange={handleLoginPassword} />
            </div>
            <button type="submit" style={{width:90,height:30}}>Login</button>
          </div>
        </form>
      </div>
      {
        responseData &&
        <div>{responseData.message}</div>
      }
    </div>
  );
}

export default Login;
