import React from 'react';
import { Heart } from 'lucide-react';

const FoodMenuItem = ({ title, price, originalPrice, isPopular, imageUrl }) => (
  <div className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
    <div className="absolute left-2 top-2 z-10">
      <button className="rounded-lg bg-white p-2 shadow-sm transition-colors hover:bg-gray-50">
        <Heart className="h-5 w-5 text-gray-600" />
      </button>
    </div>

    <div className="">
      <div className="pb-15 relative aspect-square w-full rounded-md bg-white p-12">
        <img
          src={imageUrl || './delicious-burger.png'}
          alt={title}
          className="w-full object-cover"
        />
        {isPopular && (
          <div className="absolute bottom-0 right-0 z-20">
            <img src={'./badge.png'} alt="Popular badge" className="w-20" />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-center gap-2">
          {originalPrice && (
            <div>
              <span className="mx-2 rounded-md bg-secondaryGold p-1 text-center text-sm text-mainBlack">
                -25%
              </span>
              <span className="text-center text-sm text-gray-400 line-through">
                Rs {originalPrice}
              </span>
            </div>
          )}
          <span className="text-center text-sm font-bold text-gray-400">
            Rs {price}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      </div>
    </div>
  </div>
);

const Section3 = () => {
  const menuItems = [
    {
      title: 'Fried Chicken With French Fries',
      price: 750,
      originalPrice: 1000,
      isPopular: true,
      imageUrl: './delicious-burger.png',
    },
    {
      title: 'Buffalo Wings',
      price: 650,
      isPopular: true,
      imageUrl: './grilled-2.png',
    },
    {
      title: 'Cheese Pizza',
      price: 850,
      isPopular: true,
      originalPrice: 900,
      imageUrl: './ruti.png',
    },
    {
      title: 'Garlic French Fries',
      price: 450,
      isPopular: false,
      imageUrl: './main-food-2.png',
    },
    {
      title: 'Buffalo Wings',
      price: 650,
      isPopular: false,
      imageUrl: './ruti.png',
    },
    {
      title: 'Cheese Pizza',
      price: 850,
      isPopular: true,
      imageUrl: './main-food-2.png',
    },
    {
      title: 'Garlic French Fries',
      price: 450,
      isPopular: true,
      imageUrl: './beef-ruti.png',
    },
    {
      title: 'Garlic French Fries',
      price: 450,
      isPopular: false,
      imageUrl: './main-food-2.png',
    },
  ];

  return (
    <div className="bg-[#F8E9E9] text-center font-main">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-8">
          <span className="text-sm font-medium text-secondaryGreen">
            Crispy, Every Bite Tasty
          </span>
          <h2 className="mt-2 text-3xl font-bold text-mainBlack">
            Popular Food Items
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <FoodMenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
