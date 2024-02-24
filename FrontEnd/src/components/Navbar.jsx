import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import logo from '../assets/images/logoo.jpg'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div className="logo1">
        <div className="logo"></div>
      </div> */} 
      <a href="#"><img src={logo} className="logo"alt="logo"/></a>
      <div className="menu">
        <ul className='list'>
            <li className='lists'><Link className="lin" to="/agrofunds/user/home">Home</Link></li>
            <li className='lists'><Link className="lin"to="/agrofunds/user/about">About</Link></li>
            <li className='lists'><Link className="lin" to="/agrofunds/user/home">Eligibility</Link></li>
            <li className='lists'><Link className="lin" to="/agrofunds/user/home">Types of loans</Link></li>
            <li className='lists'><Link className="lin" to="/agrofunds/user/home">Apply Loan</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
