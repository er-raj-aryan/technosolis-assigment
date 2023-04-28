import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const BASE_URL="http://localhost:8080";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [responseData, setResponseData] = useState();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let registerFormData = {
      email: registerEmail,
      password: registerPassword,
    };
    Cookies.set("RegisterData",JSON.stringify(registerFormData),{ expires: 9999999 });
    axios.post(`${BASE_URL}/register`,registerFormData).then(res => {
      if(res.data){
        setResponseData(res.data)
      }
    }).catch(error => {
      console.log("Error",error);
    })
    setResponseData(registerFormData);
  };

  const handleRegisterEmail = (e) => {
    const tEmail = e.target.value;
    setRegisterEmail(tEmail);
  };

  const handleRegisterPassword = (e) => {
    const tPassword = e.target.value;
    setRegisterPassword(tPassword);
  };

  return (
    <div>
      {/* registration */}
      <h1>Registration</h1>
      <div>
        <form action="" method="" onSubmit={handleRegisterSubmit} style={{display:"flex",gap:20}}>
          <div style={{display:"flex",flexDirection:'column',gap:20}}>
            <div style={{display:"flex",gap:20}}>
              <label>Email</label>
              <input
                type="email"
                required
                value={registerEmail}
                onChange={handleRegisterEmail}
              />
            </div>
            <div style={{display:"flex",gap:20}}>
              <label>Password</label>
              <input
                name="password"
                type="password"
                required
                value={registerPassword}
                onChange={handleRegisterPassword}
              />
            </div>
          <button type="submit" style={{width:90,height:30}}>Registration</button>
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

export default Register;
