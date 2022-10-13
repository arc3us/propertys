import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import HeroSearch from './components/HeroSearch.js';
import FilterMenu from './components/FilterMenu.js';
import PropCard from './components/PropCard.js';
import PropMapper from './components/PropMapper';


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSearch />
      <FilterMenu />
      <PropMapper />
    </div>
  );
}

export default App;
