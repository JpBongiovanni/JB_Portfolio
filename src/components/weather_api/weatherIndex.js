import React from 'react';
import NavBar from '../Nav-Bar';
import Header from '../Header';

const api = {
    key: "582a475b1f376edf1357aba5ba5c8211",
    base: "https://api.openweathermap.org/data/2.5/"
} 


const Weather = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="app">
                <main>
                    <div className="search-box">
                        <input type="text" className="search-bar"placeholder="Search...">

                        </input>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Weather