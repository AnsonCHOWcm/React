import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Notes from './pages/Notes';
import NotesMultiPage from './pages/NotesMultiPage';
import FirstProj from './pages/FirstProj';
import SecondProj from './pages/SecondProj';
import ThirdProj from './pages/ThirdProj';
import FinalProj from './pages/FinalProj';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/notes' element={<Notes/>} />
		<Route path='/notes-multipages' element={<NotesMultiPage/>} />
		<Route path='/proj_1' element={<FirstProj/>} />
		<Route path='/proj_2' element={<SecondProj/>} />
		<Route path='/proj_3' element={<ThirdProj/>} />
		<Route path='/final_proj' element={<FinalProj/>} />
	</Routes>
	</Router>
);
}

export default App;
