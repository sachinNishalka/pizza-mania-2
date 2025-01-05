

export default function Aboutus() {
    return (
        <div className="relative min-h-screen bg-black bg-cover bg-center" style={{
          backgroundImage: `url('/aboutus.png')`
        }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-7xl font-bold text-white/90 mb-12">About Us</h1>
            
            <div className="space-y-6 text-white">
              <h2 className="text-3xl font-bold mb-6">Welcome to Pizza Mania!</h2>
              
              <p className="text-lg">
                At Pizza Mania, We're passionate about serving up the ultimate comfort food experience. 
                From our freshly baked pizzas with mouthwatering toppings to our crispy, golden fried chicken 
                and perfectly seasoned fries, we've got something to satisfy every craving.
              </p>
              
              <p className="text-lg">
                Whether you're a fan of classic flavors or love to try bold new combinations, 
                Pizza Mania is your go-to destination for delicious, high-quality meals made with care.
              </p>
              
              <p className="text-lg">
                Our easy-to-use web app makes ordering a breeze, so you can enjoy your favorites 
                at home, at work, or wherever hunger strikes.
              </p>
              
              <p className="text-xl font-semibold mt-8">
                Treat yourself to a feast of flavors at Pizza Mania—because every bite should be a celebration!
              </p>
            </div>
          </div>
        </div>
      );
}
