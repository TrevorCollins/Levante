import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './SCSS/main.scss';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundry from './ErrorBoundry'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ErrorBoundry>
				<App />
			</ErrorBoundry>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
