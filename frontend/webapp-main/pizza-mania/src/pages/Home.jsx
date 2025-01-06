import React from 'react';

import PopularFoodItems from '../ui/home/section1/Section1';
import Section2 from '../ui/home/section2/Section2';
import FoodMenuSection from '../ui/home/section3/Section3';

export default function Home() {
  return (
    <>
      <PopularFoodItems></PopularFoodItems>
      <Section2></Section2>
      <FoodMenuSection></FoodMenuSection>
    </>
  );
}
