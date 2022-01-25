import './SCSS/main.scss';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import MenuNav from './Components/MenuNav';
import Contact from './Components/Contact';

import { Route, Switch} from 'react-router-dom'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<div className='content'>
				<Switch>
					<Route exact path='/'><Home /></Route>
					<Route path='/about'><About /></Route>
					<Route path='/menu'><MenuNav /></Route>
					<Route path='/contact'><Contact /></Route>
				</Switch>
			</div>
		</div>
	);
};

export default App;
