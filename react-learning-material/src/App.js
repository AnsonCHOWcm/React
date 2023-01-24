import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Notes from './pages/Notes';
import NotesMultiPage from './pages/NotesMultiPage';
import FirstProj from './pages/FirstProj';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/notes' element={<Notes/>} />
		<Route path='/notes-multipages' element={<NotesMultiPage/>} />
		<Route path='/proj_1' element={<FirstProj/>} />
	</Routes>
	</Router>
);
}

export default App;
