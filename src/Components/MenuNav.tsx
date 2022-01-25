import React, { useState } from 'react';
import './SCSS/menu-nav.scss';
import Spinner from '../Spinner';
import useFetch from '../services/useFetch';
import { IMenu } from './Types/Menu.Types';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Menu from './Menu';
// import { Tab, Tabs } from '@mui/material';

const MenuNav: React.FC = () => {
	const { data: menus, error, loading } = useFetch('menus');
	const [active, setActive] = useState(0);
	let { path, url } = useRouteMatch();

	if (error) throw error;
	if (loading) return <Spinner />;
	return (
		<div>
			<ul className='menu-nav flex-row p0 m1-vert m-inline'>
				{menus.map((m: IMenu) => (
					<li key={m.id} className='menu-nav__item'>
						<NavLink
							activeClassName='menu-nav__active'
							to={`${url}/${m.name}`}
							onClick={() => setActive(m.id)}
							className='menu-nav__title'>
							{m.title}
						</NavLink>
					</li>
				))}
			</ul>
			{/* <span>path: {path}</span>
			<br />
			<span>url: {url}</span> */}
			<Switch>
				<Route path={`${path}/`}>
					<Menu menus={menus} active={active} />
				</Route>
			</Switch>

			{/* <pre>{JSON.stringify(menus, null, 2)}</pre> */}
		</div>
	);
};

export default MenuNav;
