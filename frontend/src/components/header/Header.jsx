import React from 'react'

import Carousal from './carousal/Carousal'

import "./header.scss"

const Header = () => {
    return (
        <div id="header">
            <h1>Gallery</h1>

            <Carousal/>

        </div>
        
    )
}

export default Header
