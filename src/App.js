import './App.css';
import AboutUs from './components/AboutUS/AboutUs';
import AllPizza from './components/AllPizza/AllPizza';
import Count from './components/Count/Count';
import HeroSection from './components/HeroSection/HeroSection';
import Menu from './components/Menu/Menu';
import PizzaType from './components/PizzaType/PizzaType';
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
      <PizzaType />
      <AllPizza />
    </div>
  );
}

export default App;
