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
import Loginpage from './ui/Loginpage'
import PizzaRegister from './ui/PizzaRegister';
import ContactSection from './ui/ContactSection';
import { Contact } from 'lucide-react';


export default function App() { 
  return (
    <>
      <div className="h-screen">
        <NavBar></NavBar>
        <HeroSlider></HeroSlider>
        <main>
          <Contact></Contact>
        </main>
        <FeaturesSection></FeaturesSection>
        <Aboutfood></Aboutfood>
        <Ceo></Ceo>
        <Delivery></Delivery>
        <FoodGrid></FoodGrid>
        <Footer></Footer>
        <Loginpage></Loginpage>
        <PizzaRegister></PizzaRegister>
        <ContactSection></ContactSection>
      </div>
    </>
  );
}
