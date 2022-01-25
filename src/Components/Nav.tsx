import { AccountCircle, ShoppingCart } from '@mui/icons-material/';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import './SCSS/nav.scss';

const Nav: React.FC = () => {

	const unCheckNav = () => {
		// uncheck the nav
		console.log('uncheck')
		return undefined;
	}
	
	return (
		<div className='navbar bg-accent text-center flex-row m1-inline'>
			<input type='checkbox' id='nav-toggle' className='nav-toggle' />
			<label htmlFor='nav-toggle' className='nav-toggle__label'>
				<span></span>
			</label>
			<nav className='nav bg-accent'>
				<ul className='m0 p0'>
					<li onClick={unCheckNav()}>
						<NavLink activeClassName='nav__active' exact to='/'>Home</NavLink>
					</li>
					<li onClick={unCheckNav()}>
						<NavLink activeClassName='nav__active' to='/about'>About</NavLink>
					</li>
					<li onClick={unCheckNav()}>
						<NavLink activeClassName='nav__active' to='/menu'>Menu</NavLink>
					</li>
					<li onClick={unCheckNav()}>
						<NavLink activeClassName='nav__active' to='/contact'>Contact</NavLink>
					</li>
				</ul>
			</nav>
			<div className='user'>
				<AccountCircle />
				<span className='user__login'>
					<Link to='/'>Login</Link>
				</span>
				<ShoppingCart />
			</div>
		</div>
	);
};

export default Nav;
