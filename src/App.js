import './App.css';

import About from './About'
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router,Routes,  Route, Link } from 'react-router-dom';
import Contact from './Contact';
import What from './What';





// https://api.edamam.com/api/nutrition-details?app_id=c22f0c1d&app_key=6230e1b33ab2a2af4dbd987a3302f5dd
function App() {




  return (
		<div className='App'>
			<Router>
				<header>
					<nav>
						<ul>
							<li>
								<Link to='/' className='link'>
									Home
								</Link>
							</li>
							<li>
								<Link to='/about' className='link'>
									About US
								</Link>
							</li>

							<li>
								<Link to='/contact' className='link'>
									Vitamins and Minerals
								</Link>
							</li>
							<li>
								<Link to='/what' className='link'>
									What we DO
								</Link>
							</li>
						</ul>
					</nav>
				</header>

				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />

						<Route path='/contact' element={<Contact />} />

						<Route path='what' element={<What />} />
					</Routes>
				</main>
			</Router>

     

			
		</div>
	)
}

export default App;


