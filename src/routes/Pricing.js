import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Heroimage from "../components/Heroimage"
import Pricingg from "../components/Pricingg"
const Pricing = () => {
    return (
        <div>
            <Navbar/>
            <Heroimage heading='PRICING' text='Choose your trip'/>
            <Pricingg />
            <Footer/>
        </div>
    )
}

export default Pricing