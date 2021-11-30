import React from "react";
//import logo from './logo.svg';
import "../fonts.css";

//API call
//import CallAPI from './APICall';

//Components
import Header from "./Header";
import SearchBar from "./SearchBar";
import WeatherBox from "./WeatherBox";

//Hooks
import { useWeatherFecth } from "../hooks/useWeatherFetch";

const Home = () => {
    const { location, weather, temperature, setLocation } = useWeatherFecth();

    return (
        <div className="App">
            <div>
                <Header />
                <SearchBar setSearchTerm={setLocation} />
                <WeatherBox weather={weather} temp={temperature} />
            </div>
        </div>
    );
};

export default Home;
