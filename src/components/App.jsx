import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Goods from './Goods.jsx';
import Foter from './Foter';

function App() {
	return (
		<div className="app">
			<Header />
			<Goods />
			{/* Midle part			 */}
			<Foter/>		
		</div>
	);
}

export default App;
