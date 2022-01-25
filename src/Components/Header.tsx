import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/FullLogo.png';
import Nav from './Nav';
import './SCSS/header.scss';

const Header: React.FC = () => {
	return (
		<header>
			<div className='app-header'>
				<div className='banner'>
					<div className="banner__content flex-col">
						<Link to='/'>
							<img className='banner-img' src={Logo} alt='Levante Tacos' />
						</Link>
						<p className='tag-line'>The world needs more kindness y tacos.</p>
						<button className='order-btn fs-400 uppercase text-white'>Order Now</button>
					</div>
					<hr />
				</div>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
