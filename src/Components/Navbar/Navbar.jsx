
import React, { useState } from 'react';
import "./Navbar.css"; // CSS for styling
import { Link  , useNavigate } from 'react-router-dom';
import img1 from '../../Images/Asset 1.svg'

const MegaMenu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
  
  const navigate = useNavigate()
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(prevState => !prevState);
    };
    const handleClick = () => {
      window.location.href = 'tel:+17373591874';
    };
  
  
    function handleClick23() {
      navigate("/Contact");
    }
  
    return (
      <nav    
      className="navbar nav-with-shadow py-4">
        <div className="navbar-container">
     <Link  to={"/"} >
  
  
     <img  className='h-12'  src={img1} alt="" />
  
        
        
        </Link>
  
          <div className="navbar-hamburger" onClick={toggleMobileMenu}>
            ☰
          </div>
  
          <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
  
          <Link itemprop="availability" href="https://schema.org/InStock"
                className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
                to={'/'}
              >
                Home
              </Link>
            <li className="with-dropdown">
            <Link itemprop="availability" href="https://schema.org/InStock"
                className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
                to={'/about-us'}
              >
                 About Us   <i class="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
              
              <ul className="dropdown">
  
  <li  className="nested-dropdown-container"  >
        
  <Link style={{"color" :"white"}} to={"/Our-Work"} >
Our Work 
  </Link>
       
  </li>
  <li  className="nested-dropdown-container"  >
        
  <Link style={{"color" :"white"}} to={"/case_study"} >
Project Analysis
  </Link>
       
  </li>
  
  
              </ul>
            </li>
  <li   className='mb-dropdown' >
  
  
  <Link itemprop="availability" href="https://schema.org/InStock"
                className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
                onClick={()=>{
                  setDropdown(!dropdown)
                }}
              >
                Services  <i class="fa fa-caret-down" aria-hidden="true"></i>
              </Link>

  
  
  </li>
  
  
  
  
  
  
            <Link itemprop="availability" href="https://schema.org/InStock"
                className="block  pl-3 pr-4 text-white rounded  md:p-0"
                to={'/Services'}
              >
               Services
              </Link>
              <Link itemprop="availability" href="https://schema.org/InStock"
                className="block  pl-3 pr-4 text-white rounded  md:p-0"
                to={'/Carrers'}
              >
                
Careers
              </Link>
        
         
            <li>
             <Link itemprop="availability" href="https://schema.org/InStock"
                className="block  text-white rounded  md:p-0   "
                to={'/Contact'}
              >
                Contact Us
              </Link>
            
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default MegaMenu;