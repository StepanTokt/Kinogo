import Footer from './footer/Footer';
import Header from './header/Header'
import MainPage from './mainPage/MainPage'
import MoviePage from './moviePage/MoviePage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
   
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element = { <MainPage/>}/>
            <Route path='/:id' element = {  <MoviePage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
