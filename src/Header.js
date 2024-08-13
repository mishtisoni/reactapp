import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className='appName'><span>Get</span>It</div>
    <header>
      <Link to='/'>Home</Link>
      <Link to='/Product'>Products</Link>
      <Link to='/Cart'>Shopping Cart</Link>
    </header>
    </div>
  )
}

export default Header;
