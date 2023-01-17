import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Blog from './pages/Blog';
// import PostView from './components/PostView';
import Contact from './pages/Contact';
import About from './pages/About';
import TenThirtyOne from './pages/TenThirtyOne';
// import FullPostPage from './pages/FullPostPage';

function App() {
	return (
		<Router>
			<div className='App'>
				<>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/tenthirtyone' element={<TenThirtyOne />}></Route>
					</Routes>
				</>
			</div>
		</Router>
	);
}

export default App;
