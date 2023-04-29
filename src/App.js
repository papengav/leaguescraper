import React from 'react'

import { Navbar, Overview, About, Commands, Footer } from './components';
import './App.css';

const App = () => {
    return (
        <>
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
            <div className="App">
                <div className='navbar__bg'>
                    <Navbar />
                </div>
                <Overview />
                <About />
                <Commands />
                <Footer />
            </div>
        </>
    )
}

export default App;