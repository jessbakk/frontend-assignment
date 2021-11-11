import React from 'react'

import { GlobalStyle } from '../GlobalStyles'

import logo from '../images/logo.svg'
import Movies from './Movies'


const App = () => (
	<div>
		<img src={logo} alt="Timescale" />

		<GlobalStyle />
		<Movies />
				
	</div>
)

export default App;

