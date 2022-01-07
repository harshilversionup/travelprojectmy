import React from 'react'
import Navbar from './pages/Navbar'
import Poster from './pages/Poster'
import Ourtours from './pages/Ourtours'
import Heading from './pages/Heading'
import Footer from './pages/Footer'

export default function Home() {
    return (
        <div>
            <Poster/>
            <Heading/>
            <Ourtours/>
            <Footer/>
            
        </div>
    )
}
