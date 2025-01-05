
const FoodGrid = () => {
  const images = [
    { url: "/piz.png", alt: "Pizza being shared" },
    { url: "/chips.png", alt: "French fries and wings" },
    { url: "/sorce.png", alt: "Seasoned fries" },
    { url: "/lava.png", alt: "Chocolate dessert" },
    { url: "/coc.png", alt: "Coca Cola drinks" }
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;