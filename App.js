import React from 'react'
import Info from './Components/Info'
import About from './Components/About'
import Interests from './Components/Interests'
import Footer from './Components/Interests'

export default function App(){
    return (
        <div className = 'container'>
            <Info />
            <main>
                <About />
                <Interests />
                <Footer />
            </main>
            
        </div>
    )
}