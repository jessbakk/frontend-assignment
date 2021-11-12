import React from 'react'
//styles
import { GlobalStyle } from '../GlobalStyles'
import logo from '../images/logo.svg'
//components
import Movies from './Movies'


const App = () => (
	<div>
		<img src={logo} alt="Timescale" />

		<GlobalStyle />
		<Movies />
				
	</div>
)

export default App;

