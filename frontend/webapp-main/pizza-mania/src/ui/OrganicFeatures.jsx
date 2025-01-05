
 import { Award, Leaf, Sprout } from 'lucide-react';

const OrganicFeatures = () => {
  return (
    <div className="" style={{
      backgroundImage: `url('/Rectangle.png')`
    }}>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Premium Quality */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Premium Quality</h3>
            <p className="text-gray-600">
              The quality and safety of our products is our top priority. We continue to quest for even greater product quality
            </p>
          </div>

          {/* Always Fresh */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Alway Fresh</h3>
            <p className="text-gray-600">
              Botanica Shop is always committed to 100% fresh, organic food has a certificate of food safety certification
            </p>
          </div>

          {/* Organic Farming */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center">
              <Sprout className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Organic Farming</h3>
            <p className="text-gray-600">
              Agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicFeatures;