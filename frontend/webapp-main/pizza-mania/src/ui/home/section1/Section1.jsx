import React from 'react';
import PromoFSec from '../../PromoFSec';
const PopularFoodItems = () => {
  const foodItems = [
    { name: 'Pro Pizza', count: '10', image: './pizza.jpg' },
    {
      name: 'Chicken & French Fries',
      count: '20',
      image: './chicken.png',
    },
    { name: 'Desserts', count: '12', image: './desserts.png' },
    { name: 'Beverage', count: '40', image: './beverages.png' },
  ];

  return (
    // <div className="relative bg-[url('./sec1back.jpg')] bg-cover py-16">
    //   {/* Decorative Leaf */}
    //   <div className="absolute top-[-70px] right-[0px] w-64 h-64 z-10">
    //     <img
    //       src="/leaf.png"
    //       alt="Decorative leaf"
    //       className="w-full h-full object-contain"
    //     />
    //   </div>

    //   {/* Content Container */}
    //   <div className="relative max-w-5xl mx-auto px-6">
    //     {/* Section Header */}
    //     <div className="mb-8">
    //       <span className="text-secondaryGreen text-sm font-main font-medium">
    //         Crispy, Every Bite Tasty
    //       </span>
    //       <h2 className="text-3xl font-bold mt-2 font-main text-mainBlack">
    //         Popular Food Items
    //       </h2>
    //     </div>

    //     {/* Food Cards Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    //       {foodItems.map((item, index) => (
    //         <div
    //           key={index}
    //           className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
    //         >
    //           <div className="flex flex-col items-center">
    //             <img
    //               src={item.image}
    //               alt={item.name}
    //               className="w-32 h-32 object-cover mb-4"
    //             />
    //             <h3 className="font-semibold text-lg mb-2 font-main text-mainBlack">
    //               {item.name}
    //             </h3>
    //             <span className="text-secondaryGold font-main border-t-2 border-secondaryGold font-medium">
    //               {item.count} Products
    //             </span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="relative bg-[url('./sectionbackground.png')] bg-cover py-16">
      {/* Decorative Leaf */}
      <div className="absolute right-[0px] top-[-70px] z-10 h-64 w-64">
        <img
          src="/leaf.png"
          alt="Decorative leaf"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="font-main text-sm font-medium text-secondaryGreen">
            Crispy, Every Bite Tasty
          </span>
          <h2 className="mt-2 font-main text-3xl font-bold text-mainBlack">
            Popular Food Items
          </h2>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-4 h-32 w-32 object-cover"
                />
                <h3 className="mb-2 font-main text-lg font-semibold text-mainBlack">
                  {item.name}
                </h3>
                <span className="border-t-2 border-secondaryGold font-main font-medium text-secondaryGold">
                  {item.count} Products
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Include the PromoFSec component */}
      <div className="mt-16">
        <PromoFSec />
      </div>
    </div>
  );
};

export default PopularFoodItems;
