import { useState } from "react";
import Cards from "./Movies/Cards";
import './MainPage.css';
import Series from './Series/Series';
import withMovies from "../hoc/withMovies";
import Service from "../service/Service";
import Top5 from "./Top5/Top5";

const MainPage = () => {
    const {getMovies, getSeries} = Service();
    const MoviesWithGetMovies = withMovies(Cards, getMovies);
    const MoviesWithGetSeries = withMovies(Series, getSeries);

    return (
        <div className="main_page">
            <div className="movies-side">
                <p className="main_page-titles">Movies</p>
                <MoviesWithGetMovies/>
            </div>

            <div className="devision"></div>

            <div className="series-side">
                <p className="main_page-titles">Series</p> 
                <MoviesWithGetSeries/>
            </div>

            <div className="devision"></div>

            <div className="series-side">
                <p className="main_page-titles">Top 3 of the week</p> 
                <Top5/>
            </div>
        </div>
    );
};

export default MainPage;
