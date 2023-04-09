import React from 'react'

import { Navbar, Overview, About, Commands, Footer } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className='navbar__bg'>
                <Navbar />
            </div>
            <Overview />
            <About />
            <Commands />
            <Footer />
        </div>
    )
}

export default App;