import Service from "../../service/Service"
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import setContent from "../../utils/setContent";
import './Top5.css'

const Top5 = () => {
    const [movies, setMovies] = useState([]);
    const {getTop5, setProcess, process} = Service();

    useEffect(() => {
        updateMovies();
    }, []);

    const updateMovies = () => {
        getTop5()
            .then(onMoviesLoaded)
            .then(() => setProcess('confirmed'));
    };

    const onMoviesLoaded = (movies) => {
        setMovies(movies);
    };

    const renderMovies = (movies) => {  
        return movies.map(item => (
            <Link className='current_link' to={`/${item.id}`}>
                <div className="top5_card-item" key={item.id}>
                    <div className="card-item__inner">
                        <img src={item.img} alt="" className="card-img" />
                        <div className="card-text">
                            <span className="name">{item.name}</span>
                            <span className="year">{item.year}</span>
                            <span className="rating">rating: {item.rating} <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg></span>
                        </div>
                    </div>
                </div>
            </Link>
        ));
    };

    const elements = useMemo(() => {
        return setContent(process, () => renderMovies(movies), null);
    }, [process]);


    return(
        <section className="top5">
            {elements}
        </section>
    )
}

export default Top5