import './Navigation.css'
import Nav_icon from '../Nav_icon/Nav_icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import phono from '../../assets/Images/os.jpg'; 
const Navigation = () => {
    const [smallnavCollapse, setsmallnavCollapse] = useState(false);
    return (
        <div>
            
            <nav>
                <div className='logo'>
                    <i className="bi bi-justify smallIcon" onClick={() => { setsmallnavCollapse(!smallnavCollapse) }}></i>
                    <img src={phono} alt="" />
                </div>
                <div className='nav-icon'>
                    <Nav_icon class={"bi bi-person"} />
                    <Nav_icon class={"bi bi-search"} />
                    <Nav_icon class={"bi bi-cart-fill"} />
                </div>
            </nav>
            <div className={`${smallnavCollapse ? "hiddenSidebar" : "blockSidebar"} sidebar-container `}>
                <div className="nav-option option1 mt-lg-5 d-flex justify-content-center">
                    <Link className='h4' to={'/'}>Home</Link>
                </div>
                <div className="nav-option option1 mt-lg-5 d-flex justify-content-center">
                    <Link className='h4' to={'/About'}>About</Link>
                </div>
                <div className="nav-option option1 mt-lg-5 d-flex justify-content-center">
                    <Link className='h4' to={'/ContactUs'}>Contact us</Link>
                </div>
            </div>
        </div>
    )
}
export default Navigation
