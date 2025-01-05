

const FeaturesSection = () => {
  const features = [
    {
      icon: "🍔",
      title: "Super Quality Food",
      description: "A team of dreamers and doers building unique interactive music and art"
    },
    {
      icon: "🥘",
      title: "ORIGINAL RECIPES",
      description: "A team of dreamers and doers building unique interactive music and art"
    },
    {
      icon: "🛵",
      title: "QUICK FAST DELIVERY",
      description: "A team of dreamers and doers building unique interactive music and art"
    },
    {
      icon: "✨",
      title: "100% FRESH FOODS",
      description: "A team of dreamers and doers building unique interactive music and art"
    }
  ];

  return (
    <div className="bg-red-500 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4 text-yellow-400">{feature.icon}</div>
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-white text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;