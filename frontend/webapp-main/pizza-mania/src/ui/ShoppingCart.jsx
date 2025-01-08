import React, { useState } from 'react';
import { Trash2, CreditCard } from 'lucide-react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Hot Garlic Prawns', quantity: 1, price: 2950, image: '/pizza 001.png' },
    { id: 2, name: 'Fried Chicken', quantity: 2, price: 3000, image: '/ciken wings.png' },
    { id: 3, name: 'Chocolate Lava Cake', quantity: 2, price: 900, image: '/lava cake.png' },
    { id: 4, name: 'Coca-Cola', quantity: 2, price: 600, image: '/cocacola.png' }
  ]);

  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  const [selectedCardType, setSelectedCardType] = useState('mastercard');

  const cardTypes = [
    { id: 'mastercard', name: 'Mastercard', image: '/master.png' },
    { id: 'visa', name: 'Visa', image: '/visa.png' },
    { id: 'applepay', name: 'Apple Pay', image: '/ApplePay.png' }
  ];

  // Rest of the state management and handler functions remain the same
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = () => {
    if (!formData.cardName || !formData.cardNumber || !formData.expDate || !formData.cvv) {
      alert('Please fill in all card details');
      return;
    }
    alert(`Order placed! Total: Rs ${total}\nPayment Method: ${selectedCardType}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Shopping Continue button */}
      <div className="mb-4">
        <button className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Shopping Continue
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items section remains the same */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Shopping cart</h2>
          <p className="text-gray-600 mb-4">You have {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-medium">Rs {item.price * item.quantity}</span>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                Your cart is empty
              </div>
            )}
          </div>
        </div>

        {/* Payment Details */}
        <div className="lg:w-96">
          <div className="bg-rose-500 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Card Details</h2>
            
            {/* Simplified card type selection */}
            <div className="mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <div className="flex gap-2">
                {cardTypes.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCardType(card.id)}
                    className={`p-1.5 bg-white rounded transition-all ${
                      selectedCardType === card.id 
                        ? 'ring-2 ring-white' 
                        : 'opacity-60 hover:opacity-80'
                    }`}
                  >
                    <img src={card.image} alt={card.name} className="h-5 w-auto" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Name on card</label>
                <input 
                  type="text" 
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="Name" 
                  className="w-full p-2 rounded bg-rose-400 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm">Card Number</label>
                <input 
                  type="text" 
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1111 2222 3333 4444" 
                  maxLength="19"
                  className="w-full p-2 rounded bg-rose-400 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-2 text-sm">Expiration date</label>
                  <input 
                    type="text" 
                    name="expDate"
                    value={formData.expDate}
                    onChange={handleInputChange}
                    placeholder="mm/yy" 
                    maxLength="5"
                    className="w-full p-2 rounded bg-rose-400 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm">CVV</label>
                  <input 
                    type="text" 
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123" 
                    maxLength="3"
                    className="w-full p-2 rounded bg-rose-400 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>Rs {deliveryFee}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total (Tax incl.)</span>
                <span>Rs {total}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className="w-full mt-6 bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;


