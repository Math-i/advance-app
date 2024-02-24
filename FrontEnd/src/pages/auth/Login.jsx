import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const nav = useNavigate();
  
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');


    const handleSubmit=(e)=>
    {
      
      e.preventDefault();
      nav("/agrofunds/user/home");
      
    }

  return (
    <div className="login_container">
      <div className="ima">
      </div>
      <div className="heading">
        <span className="top">LOGIN</span>
      </div>
      <form>
        <div className="input">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
      </form>
      <div className="loginButton">
        <button className="button" type="button" onClick={handleSubmit}>Login</button>
      </div>
      <div className="last">
        <p>Dont have an account ? <Link to="/agrofunds/signup" className="link"><span>Register</span></Link></p>
      </div>
    </div>
  );
};

export default Login;
