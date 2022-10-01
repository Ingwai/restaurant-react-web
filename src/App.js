import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<div className='App'>
			<BrowserRouter basename='/react/restaurant-react-web'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Navigate to='Home' />} />
					{/* <Route path='/' element={<Home />} /> */}
					<Route path='/home' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
