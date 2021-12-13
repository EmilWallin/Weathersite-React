import React from "react";
//import logo from './logo.svg';
import "../fonts.css";

//API call
//import CallAPI from './APICall';

import "../App.css";

//Components
import Header from "./Header";
import SearchBar from "./SearchBar";
import WeatherBox from "./WeatherBox";

//Hooks
import { useWeatherFecth } from "../hooks/useWeatherFetch";

const Home = () => {
    const {weather, temperature, localTime, setLocation } = useWeatherFecth();
    return (
        <div className="HomePage">
            <div>
                <Header />
                <SearchBar setSearchTerm={setLocation} />
                <WeatherBox weather={weather} temp={temperature} localTime={localTime} />
            </div>
        </div>
    );
};

export default Home;
