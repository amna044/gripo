import React from 'react'
import NavBar from '../nav/NavBar'
import NavbarFixed from '../nav/NavbarFixed'
import Header from '../components/Header'
import Product from '../components/Product'



function Home() {
    return (
        <div className="home">
            <NavbarFixed/> 
            <NavBar/>
             <div>
                 <Header/>
                 <Product/>
             </div>
        </div>
    )
}

export default Home
