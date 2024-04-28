import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import Service from '../service/Service';
import setContent from '../utils/setContent';
import searchLoading from '../img/Searching.gif'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [name, setName] = useState('')
    const [movies, setMovies] = useState([]);
    const {getMovieBySearch, setProcess, process} = Service();

    const updateMovies = (name) => {
        getMovieBySearch(name)
            .then(onMoviesLoaded)
            .then(() => setProcess('confirmed'));
    };

    

    const onMoviesLoaded = (movies) => {
        setMovies(movies);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(name != '') {
            setShowMenu(true);
            updateMovies(name)
            
           
        }
    };

    const renderMovies = (movies) => {  
        return movies.length > 0 ?
        movies.map(item => (
            <Link className='current_link block_header' to={`/${item.id}`}>
                 <div className="header_card-item" key={item.id}>
                    <div className="header_card-item__inner">
                        <img src={item.img} alt="" className="header_card-img" />
                        <div className="header_card-text">
                            <span className="header_name">{item.name}</span>
                            <span className="header_year">{item.year}</span>
                        </div>
                    </div>
                </div>
            </Link>
        ))
        :
        <h3>По вашему запросу ничего не найдено</h3>
    };

    const elements = useMemo(() => {
        return setContent(process, () => renderMovies(movies), null);
    }, [process]);

    return (
        <div className="header">
            <div className="container">
                <div className="header__block">
                    <Link className='current_link' to='/'>
                        <div className="text__block">
                            <h1>Kinogo</h1>
                        </div>
                    </Link>

                    <div className="movie_icon">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
                            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>

                        <form onSubmit={handleSubmit}>
                            <input type="text" name="" id="" placeholder="Input movie's name and press Enter" onChange={(e) => setName(e.target.value)}/>
                            
                          
                            {movies.length != 0 ?
                                <div className="dropdown-menu">
                                     {elements}
                                </div> : 
                                showMenu ? 
                                    <div className="dropdown-menu">
                                        <img src={searchLoading} alt="" />
                                    </div> 
                                    : null
                                }
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
