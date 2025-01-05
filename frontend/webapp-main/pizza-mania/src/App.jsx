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



export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <div>Application Body</div>
      <FeaturesSection></FeaturesSection>
      <Aboutfood></Aboutfood>
      <Ceo></Ceo>
      {/* <ImageSlider></ImageSlider> */}
      <FoodGrid></FoodGrid>
      <Dilivery></Dilivery>
      <Aboutus></Aboutus>
      <RestaurantLanding></RestaurantLanding>
      <OrganicFeatures></OrganicFeatures>
      <DeliveryBenefits></DeliveryBenefits>
      <Footer></Footer>

      
     
      
      
    </>
  );
}
