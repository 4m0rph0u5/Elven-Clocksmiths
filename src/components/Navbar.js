import React from 'react';
import '../components/style modules/Navbar.css';

const Navbar = () => {
  // const [showDropdown, setShowDropDown] = useState(false);

  return (
    <>
      <div className='nav_container'>
        <nav className='navbar'>
          <div className='logo'>
            <a href='#'>Elven Clockwork</a>
          </div>

          <ul className='navmenu'>
            <li className='catalog'>
              <a href='#'>Catalog</a>
            </li>
            <li>
              <a href='#' className='about'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='contact'>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
