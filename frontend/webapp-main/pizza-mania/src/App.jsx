import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';

import Footer from './ui/Footer';
import NavBar from './ui/NavBar';
import HeroSlider from './ui/Slider';
import FeaturesSection from './ui/FeaturesSection';
import Aboutfood from './ui/Aboutfood';
import Ceo from './ui/Ceo';
import FoodGrid from './ui/Foodgrid';
import Delivery from './ui/Dilivery';

export default function App() {
  return (
    <>
      <div className="h-screen">
        <NavBar></NavBar>
        <HeroSlider></HeroSlider>
        <main>
          <Menu></Menu>
        </main>
        <FeaturesSection></FeaturesSection>
        <Aboutfood></Aboutfood>
        <Ceo></Ceo>
        <Delivery></Delivery>
        <FoodGrid></FoodGrid>
        <Footer></Footer>
      </div>
    </>
  );
}
