import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../assets/css/register.css";
import { useState } from "react";
const Register = () => {

  const nav = useNavigate();

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[confirmPassword,setConfirmPassword] = useState('');

  const handleSubmit=(e)=>
    {
      
      e.preventDefault();
      nav("/agrofunds/user/home");
      
    }

  return (
    <div className="reg_container">
      <div className="ima">
      </div>
      <div className="heading">
        <span className="top">Register</span>
      </div>
      <form>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="text" value= {name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="input">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" value= {email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value= {password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="con_password">Confirm Password</label>
          <input type="password" id="con_password" value= {confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        </div>
      </form>
      <div className="loginButton">
        <button className="button" type="button" onClick={handleSubmit}>Register</button>
      </div>
      <div className="last">
        <p>Already have an account ? <Link to="/agrofunds/login" className="link"><span>Login</span></Link></p>
      </div>
    </div>
  );
};

export default Register;
