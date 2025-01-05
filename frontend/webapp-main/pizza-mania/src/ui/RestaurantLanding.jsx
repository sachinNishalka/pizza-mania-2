
 import { Phone, Utensils } from 'lucide-react';

const RestaurantLanding = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-red-500 font-semibold mb-4">ABOUT THE FOOD RESTAURANT</p>
        <h1 className="text-4xl md:text-5xl font-bold">Perfect Place For An Exceptional<br />Experience</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {/* Left Image */}
        <div className="rounded-full overflow-hidden aspect-square">
          <img 
            src="/cook.png" 
            alt="Chef preparing food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="rounded-full overflow-hidden aspect-square">
          <img 
            src="/phone.png/" 
            alt="Food ordering app"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <p className="text-gray-600">
            Nisl quam nestibulum ac quam nec odio elementu sceisue the aucan ligula. Orci varius natoque pena culus mus nellentesque ha um ac quam nec odio elbrine.
          </p>

          <div className="space-y-6">
            {/* Online Ordering Feature */}
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-yellow-100">
                <Phone className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Online Food Ordering</h3>
                <p className="text-gray-600">Easy Food delivery from the best restaurants.</p>
              </div>
            </div>

            {/* Healthy Food Feature */}
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-yellow-100">
                <Utensils className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">100% Healthy Food</h3>
                <p className="text-gray-600">Eating a wide variety of nutritious Healthy foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLanding;