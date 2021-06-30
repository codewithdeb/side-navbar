import logo from './logo512.png'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import { BsPersonFill } from 'react-icons/bs'

const Navbar = ({show}) => {
    return (
        <div className = {show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} alt="Logo" className="logo"/>
            <ul>
                <li > 
                    <Link to='/' className = "active" ><FiHome/> Home</Link>
                </li>
                <li>
                    <Link to='/about'><BsPersonFill/> About</Link> 
                </li>
            
            </ul>
        </div>
    );
}

export default Navbar