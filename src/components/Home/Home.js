import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Portfolios from '../Portfolios/Portfolios';

const Home = () => {
    const myStyle = {
        backgroundColor: "#000000",
        backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
        color: "white"
    }
    return (
        <div style={myStyle}>
            <Header />
            <About />
            <Portfolios />
            <Contact />
        </div>
    );
};

export default Home;