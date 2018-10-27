import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App, {BooksApp} from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
	<div>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* <BooksApp /> */}
	</div>,
	document.getElementById('root'));

registerServiceWorker();
