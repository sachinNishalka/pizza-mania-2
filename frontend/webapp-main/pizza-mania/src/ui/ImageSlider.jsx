// import React, { useState, useEffect } from 'react';

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const images = [
//     {
//       url: "/piz.png",
//       alt: "Pizza being shared",
//     },
//     {
//       url: "/chips.png",
//       alt: "French fries and wings",
//     },
//     {
//       url: "/sorce.png",
//       alt: "Seasoned fries",
//     },
//     {
//       url: "/lava.png",
//       alt: "Chocolate dessert",
//     },
//     {
//       url: "/coc.png",
//       alt: "Coca Cola drinks",
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div 
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img
//               src={image.url}
//               alt={image.alt}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>
      
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full ${
//               currentIndex === index ? 'bg-white' : 'bg-gray-400'
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;