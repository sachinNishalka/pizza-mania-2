
import Aboutfood from "./ui/Aboutfood";
import Aboutus from "./ui/Aboutus";
import Dilivery from "./ui/Dilivery";
import FeaturesSection from "./ui/FeaturesSection";
import FoodGrid from "./ui/Foodgrid";
import Footer from "./ui/Footer";
import NavBar from "./ui/NavBar";
import OrganicFeatures from "./ui/OrganicFeatures";
import RestaurantLanding from "./ui/RestaurantLanding";
import Ceo from "./ui/ceo";
import DeliveryBenefits from "./ui/DeliveryBenefits";
// import ImageSlider from "./ui/ImageSlider";
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

    
    
     
//       <div>Application Body</div>
//       <FeaturesSection></FeaturesSection>
//       <Aboutfood></Aboutfood>
//       <Ceo></Ceo>
//       {/* <ImageSlider></ImageSlider> */}
//       <FoodGrid></FoodGrid>
//       <Dilivery></Dilivery>
//       <Aboutus></Aboutus>
//       <RestaurantLanding></RestaurantLanding>
//       <OrganicFeatures></OrganicFeatures>
//       <DeliveryBenefits></DeliveryBenefits>
//       <Footer></Footer>

      
     
      

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
