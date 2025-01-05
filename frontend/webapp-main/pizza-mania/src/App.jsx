import Footer from './ui/Footer';
import NavBar from './ui/NavBar';
import PromoFSec from './ui/PromoFSec';
import PopularFoodItems from './ui/Section1';
import Section2 from './ui/Section2';
import FoodMenuSection from './ui/Section3';
import HeroSlider from './ui/Slider';

export default function App() {
  return (
    <>
      <div className="h-screen">
        <NavBar></NavBar>
        <main>
          <HeroSlider></HeroSlider>
          <PopularFoodItems></PopularFoodItems>
          <Section2></Section2>
          <FoodMenuSection></FoodMenuSection>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
