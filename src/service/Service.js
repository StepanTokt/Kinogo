import { useHttp } from "../hook/Hook";
import base_img from '../img/base_img.png'

const Service = () => {
    const {request, process, setProcess, clearError} = useHttp()


    const _http = 'https://api.kinopoisk.dev/v1.4/'

    const top5 = [
        {
            "id": 1100777,
            "name": "Триггер",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000017e08446283517541047b63d35a54/orig",
            "rating": 7.4,
            "year": 2018
        },
        {
            "id": 435,
            "name": "Зеленая миля",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000169e39ef77f588ccdfe574dae8227/orig",
            "rating": 8.6,
            "year": 1999
        },
        {
            "id": 689,
            "name": "Гарри Поттер и фи...",
            "img": "https://image.openmoviedb.com/tmdb-images/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
            "rating": 7.6,
            "year": 2001
        },
      
    
    ]



    const obj = [
        {
            "id": 1100777,
            "name": "Триггер",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000017e08446283517541047b63d35a54/orig",
            "rating": 7.4,
            "year": 2018
        },
        {
            "id": 435,
            "name": "Зеленая миля",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000169e39ef77f588ccdfe574dae8227/orig",
            "rating": 8.6,
            "year": 1999
        },
        {
            "id": 689,
            "name": "Гарри Поттер и фи...",
            "img": "https://image.openmoviedb.com/tmdb-images/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
            "rating": 7.6,
            "year": 2001
        },
        {
            "id": 5047468,
            "name": "Холоп 2",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018dd0d4e773da22154d134398d333/orig",
            "rating": 5.6,
            "year": 2023
        },
        {
            "id": 42782,
            "name": "Операция «Ы» и др...",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000017332fe43abb5852312cb62ce9851/orig",
            "rating": 8.5,
            "year": 1965
        },
        {
            "id": 447301,
            "name": "Начало",
            "img": "https://image.openmoviedb.com/tmdb-images/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
            "rating": 8.8,
            "year": 2010
        },
        {
            "id": 45146,
            "name": "Любовь и голуби",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001616b8dc4fa33ac8cb295d72801b5/orig",
            "rating": 7.9,
            "year": 1984
        },
        {
            "id": 397667,
            "name": "Остров проклятых",
            "img": "https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000017b3facc50cd2fab4e9aec3f590ad/orig",
            "rating": 8.2,
            "year": 2009
        },
    
    ]

    const movie = {
        "id": 435,
        "name": "Зеленая миля",
        "img": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000169e39ef77f588ccdfe574dae8227/orig",
        "rating": 8.6,
        "year": 1999,
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        "duration": "189 minutes",
        "trailer": "https://www.youtube.com/embed/TODt_q-_4C4",
        "genres": [
            {
                "name": "драма"
            },
            {
                "name": "фэнтези"
            },
            {
                "name": "криминал"
            }
        ],
        "county": [
            {
                "name": "США"
            }
        ]
    }

    let search = [
        {
          "id": 535341,
          "name": "1+1",
          "img": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a000001607394c5d88c8722dd5ea6728fa4/orig",
          "rating": 8.5,
          "year": 2011
        },
        {
          "id": 1143242,
          "name": "Джентльмены",
          "img": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a000001711b57abb795e9276957168f83e9/orig",
          "rating": 7.8,
          "year": 2019
        },
        {
          "id": 462682,
          "name": "Волк с Уолл-стрит",
          "img": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a00000178c650387351c4923363500151bd/orig",
          "rating": 8.2,
          "year": 2013
        }
      ]

    const img =[
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1900788/6cacc99b-ac9b-4dc4-9ff7-48d92933386c/orig",
          "id": "632e5dcfaff710671ba878de"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/06db78fc-e2c9-4e32-98a3-5e2b4db2d7c7/orig",
          "id": "632e5dcfaff710671ba8788d"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/5211ad23-44a7-4b36-9f6b-3b10effcc722/orig",
          "id": "632e5dceaff710671ba87831"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/8eb9bb41-54e1-4701-ab0e-dd1db79b2d5a/orig",
          "id": "632e5dceaff710671ba877e8"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/c527910e-7a49-4803-9fb9-ad816a92b1a5/orig",
          "id": "632e5dceaff710671ba877a5"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/febff47d-44aa-44b1-93c4-afd208805531/orig",
          "id": "632e5dcdaff710671ba87759"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/cf02daed-c9a9-4c06-828d-d142254cb7dc/orig",
          "id": "632e5dcdaff710671ba87685"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/759e478d-9c0b-4f71-8fcb-fb639c652356/orig",
          "id": "632e5dcdaff710671ba875f5"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/16e092f9-466d-415d-ade7-cbfda361cffb/orig",
          "id": "632e5dccaff710671ba875b2"
        },
        {
          "url": "https://image.openmoviedb.com/kinopoisk-images/1777765/cb360c9d-2afb-48f9-9c57-76719dfb649a/orig",
          "id": "632e5dccaff710671ba87585"
        }
      ]

    const getMovies = async(page=1) => {
          const res = await request(`${_http}movie?page=${page}&limit=8&isSeries=false`)
      return res.docs.map(_transformMovies)      
    }

    const getSeries = async(page=1) => {
      // return obj

        const res = await request(`${_http}movie?page=${page}&limit=8&isSeries=true`)
        return res.docs.map(_transformMovies)
    }

    const getMovie = async(id) => {
      // return movie

        const res = await request(`${_http}movie/${id}`)
        return _transformMovie(res)          
    }

    const getMovieBySearch = async(name) => {
      // return search
        const res = await request(`${_http}movie/search?limit=3&query=${name}`)
        return res.docs.map(_transformMovies)
    }

    const getTop5 = async() => {
      //return top5

        const res = await request(`${_http}movie?page=1&limit=3`)
        return res.docs.map(_transformMovies)
    }


    const getImages = async(id) => {
      //return img

        const res = await request(`${_http}image?page=1&limit=10&selectFields=url&movieId=${id}`)
        return res.docs
    }
    

    const _transformMovies = (data) => {
        return{
            id: data.id,
            name: data.name.length > 17 ? data.name.slice(0,17)+'...' : data.name,
            img: data.backdrop.url ? data.backdrop.url : base_img,
            rating: data.rating.imdb ?  data.rating.imdb : 'No info',
            year: data.year ? data.year : 'No info',
        }
    }

    const _transformMovie = (data) => {
       
        return{
            id: data.id,
            name: data.name ? data.name : 'No name',
            img: data.backdrop.url ? data.backdrop.url : base_img,
            rating: data.rating.imdb ?  data.rating.imdb : 'No info',
            year: data.year ? data.year : 'No info',
            description: data.description ? data.description : 'No info',
            duration: data.movieLength  ? `${data.movieLength} minutes` : 'No info',
            trailer: data.videos ? data.videos.trailers[0].url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            genres: data.genres ? data.genres : ['No info'],
            country: data.countries ? data.countries : ['No info']
        }
    }

    


   

    return{
        process,
        setProcess,
        clearError,
        getMovies,
        getMovie,
        getSeries,
        getMovieBySearch,
        getTop5,
        getImages
    }
}

export default Service