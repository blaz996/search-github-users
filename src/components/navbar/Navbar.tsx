import React from 'react';

import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

import './Navbar.scss';

type NavLinks = {
  name: string;
  url: string;
  icon?: React.Component;
};

type NavBarProps = {
  links: NavLinks;
};

const Navbar = () => {
  return (
    <nav className='nav'>
      <h1 className='nav__logo'>
        <FaGithub />
        Github Stats
      </h1>
      <ul className='nav__links'>
        <li>
          <Link className='nav__link' to=''>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav__link' to='search'>
            Search
          </Link>
        </li>
        <li>
          <Link className='nav__link' to='trending-repos'>
            Trending Repos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
