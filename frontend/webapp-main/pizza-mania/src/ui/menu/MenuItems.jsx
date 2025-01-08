import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Modal from '../Modal';
import MainButton from '../MainButton';

export default function MenuItems() {
  const { type } = useParams();
  console.log(type);

  const pizzas = [
    {
      name: 'Hot Garlic Prawns',
      price: 2950,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Chicken Hawaiian',
      price: 3200,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Beef Pepperoni',
      price: 2900,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Spicy Veggie with Paneer',
      price: 2600,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Festive Chicken Magic',
      price: 2800,
      image: '/pizzaitem.png',
      isNew: true,
    },
    {
      name: 'Meat Lover',
      price: 3500,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Veggie Masala Pizza',
      price: 2500,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Seafood Treat',
      price: 3200,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Chicken Salami Pizza',
      price: 2800,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Hot & Spicy Chicken',
      price: 3000,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Butter Chicken Masala',
      price: 3200,
      image: '/pizzaitem.png',
      isNew: false,
    },
    {
      name: 'Cheese Lovers',
      price: 2400,
      image: '/pizzaitem.png',
      isNew: false,
    },
  ];
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pizzas.map((pizza) => (
          <Modal>
            <Modal.Open open="details">
              <div
                onClick={() => alert('hello')}
                key={pizza.name}
                className="relative rounded-lg bg-white p-4 shadow-md"
              >
                {pizza.isNew && (
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                    NEW
                  </span>
                )}

                <div className="relative mb-4">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="h-48 w-full rounded-lg object-cover"
                  />
                </div>

                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{pizza.name}</h3>
                  <button
                    className="rounded-full p-2 transition-colors hover:bg-gray-100"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>

                <div className="font-semibold text-green-600">
                  Rs {pizza.price.toLocaleString()}
                </div>
              </div>
            </Modal.Open>

            <Modal.Window name="details">
              <div className="w-96 rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 flex justify-center">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="h-48 w-48 rounded-lg object-cover"
                  />
                </div>
                <div className="mb-2">
                  <h3 className="text-lg font-semibold">{pizza.name}</h3>
                  <div className="font-semibold text-green-600">
                    Rs {pizza.price.toLocaleString()}
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo quis laborum recusandae maxime possimus repellat
                    expedita cum minus! Suscipit corporis ut, minus eos
                    provident porro aliquid veniam accusantium aperiam facilis.
                  </p>
                </div>
                <div className="flex justify-center">
                  <button className="rounded-md bg-secondaryRed px-4 py-2 text-white hover:bg-red-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </Modal.Window>
          </Modal>
        ))}
      </div>
    </div>
  );
}
