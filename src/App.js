import './App.css';
import AboutUs from './components/AboutUS/AboutUs';
import HeroSection from './components/HeroSection/HeroSection';
import Menu from './components/Menu/Menu';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutUs />
      <Shop />
      <Menu />
    </div>
  );
}

export default App;
