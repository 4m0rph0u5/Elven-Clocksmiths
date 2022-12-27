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
            <li className='nav-item'>
              <a href='#'>Catalog</a>
            </li>
            <li className='nav-item'>
              <a href='#'>About</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
