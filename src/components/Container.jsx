import React from 'react'
import './Container.css'
import equilibrium from "../images/image-equilibrium.jpg"
 import MedContainer from './MedContainer'
 import Footer from './Footer'

const Container = () => {
    return (
        <div className='container'>
            <div>
            <img className="img" src={equilibrium} alt="" />
            </div>
            <MedContainer />
            <Footer />
        </div>
    )
}

export default Container
