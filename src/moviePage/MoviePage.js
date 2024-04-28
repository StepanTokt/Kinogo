import './MoviePage.css';
import tmp from '../img/tmp.jpg';
import { useState, useEffect, useMemo } from 'react';
import Service from "../service/Service";
import { useParams } from 'react-router-dom';
import setContent from '../utils/setContent';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [img, setImg] = useState([]);
    const { getMovie, setProcess, process, getImages } = Service();

    useEffect(() => {
        updateMovie(id);
        updateImg(id)
    }, [id]);

  

    const updateMovie = (id) => {
        getMovie(id)
            .then(onMovieLoaded)
            .then(() => setProcess('confirmed'));
    };

    const onMovieLoaded = (movie) => {
        setMovie(movie);
    };

    const updateImg = () => {
        getImages(id)
            .then(onImgLoaded)
            .then(() => setProcess('confirmed'));
    };

    const onImgLoaded = (img) => {
        setImg(img);
    };

    const renderMovie = (movie) => {  
        return (
            <section className='moviePage'>
            <div className="itemPage__flexbox" key={movie.id}>
                <img src={movie.img} alt="" className="itemImg" />
                <div className="flexbox-rightSide">
                    <h1 className="movieName">{movie.name}</h1>
                                        
                    <div className="description"><span className="span">Description:</span>{movie.description}</div>
                    <div className="genres"><span className="span">Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}</div>
                    <div className="year"><span className="span spanMr">Year:</span> <span className="spanYear">{movie.year}</span></div>
                    <div className="rating"><span className="span spanMr">Rating:</span> <span className="spanRating">{movie.rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    </div>
                    {movie.duration == 'No info'  ? null : <div className="duration"><span className="span spanMr">Duration:</span> <span className="spanDuration">{movie.duration}</span></div>}
                </div>
            </div>
            <h2 className='h2_trailer'>Trailer:</h2>
            <div className="trailer">
              
                <iframe
                    width="560"
                    height="315"
                    src={movie.trailer}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            </section>
        )
    };


    const element = useMemo(() => {
        return setContent(process, () => renderMovie(movie), null);
    }, [process]);

    const renderImg = (img) => {  
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          };
        return (
            img && img.length > 0 ? 
            <section className='imgSection'>
                <span className="images-title">Images</span>
            <Slider className='slider' {...settings}>
                {img.map((item) => (
                <div key={item.id}>
                    <img src={item.url} alt={`Image ${item.id}`} />
                </div>
                ))}
            </Slider>
            </section>
            : null
        )
    };


    return (
        <section className="itemPageBlock">
            <div className="container">
                {element}
                {renderImg(img)}
            </div>
        </section>
    );
}

export default MoviePage;
