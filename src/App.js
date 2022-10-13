import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import HeroSearch from './components/HeroSearch.js';
import FilterMenu from './components/FilterMenu.js';
import PropCard from './components/PropCard.js';


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSearch />
      <FilterMenu />
      <PropCard />
    </div>
  );
}

export default App;
