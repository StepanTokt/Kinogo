import { useState, useEffect, useMemo } from 'react';
import Service from '../service/Service';
import '../mainPage/Movies/Cards.css'
import setContent from '../utils/setContent';
import { Link } from 'react-router-dom';

const withMovies = (BaseComponent, getData) => {
    return () => {  
        const [movies, setMovies] = useState([]);
        const {getImages, setProcess, process} = Service();
        const [page, setPage] = useState(1);
        const totalPages = 10; // Общее количество страниц

        useEffect(() => {
            updateMovies(page);
        }, [page]);

        const updateMovies = (page) => {
            getData(page)
                .then(onMoviesLoaded)
                .then(() => setProcess('confirmed'));
        };

        const onMoviesLoaded = (movies) => {
            setMovies(movies);
        };
        

        const renderMovies = (movies) => {
            return movies.map(item => (
                <Link className='current_link' to={`/${item.id}`}>
                    <div className="card-item" key={item.id}>
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
        }, [process, movies]);

        const handleChange = (pageNumber) => {
            setPage(pageNumber);
        };

        let startPage = page - 2 > 0 ? page - 2 : 1
        let endPage = Math.min(startPage + 9, totalPages+page-1)
        endPage = endPage >= 30 ? 30 : endPage
        startPage = endPage - startPage == 10 ? startPage : endPage - 9

        return(
            <BaseComponent 
                startPage = {startPage}
                page={page}
                handleChange={handleChange}
                elements={elements}
                process={process}
                endPage={endPage}
                />
        )
    }
}

export default withMovies