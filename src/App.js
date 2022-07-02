import axios from 'axios';

import React from 'react';
import './assets/css/style.css'

import Header from './components/header';
import Work from './components/work';
import Footer from './components/footer';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class App extends React.Component {

	render() {
		return (
			<div>

				<div className="spacer layer-top1"></div>

				<Header />

				<div className="spacer layer-bottom1"></div>
				<div className="spacer layer-top1"></div>

				<Work />

				<div className="spacer-thin layer-thin2"></div>

				<Footer />

			</div>
		);
	};

}


export default App;
