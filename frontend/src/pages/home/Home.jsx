import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/header/Header'

import "./home.scss"
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/Menu'
// import Card from '../../components/card/Card'

const Home = () => {
    return (
        <div id="container">
            <Navbar/>
            <Header/>
            <Menu/>
            <Footer/>

        </div>
    )
}

export default Home
