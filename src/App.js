import './App.css';
import AboutUs from './components/AboutUS/AboutUs';
import Count from './components/Count/Count';
import HeroSection from './components/HeroSection/HeroSection';
import Menu from './components/Menu/Menu';
import QuickDelivery from './components/QuickDelivery/QuickDelivery';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutUs />
      <Shop />
      <Menu />
      <Count />
      <QuickDelivery />
    </div>
  );
}

export default App;
