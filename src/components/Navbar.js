import React from 'react';

const Navbar = () => {
  return (
    <>
      <ul>
        <li>Logo</li>
        <li>Catalog</li>
        {/* catalog will have doropdown menu and a down arrow next to it*/}
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </>
  );
};

export default Navbar;
