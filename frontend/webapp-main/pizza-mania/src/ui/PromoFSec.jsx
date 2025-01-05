// import React from 'react';

// const PromoFSec = () => {
//   return (
//     <div
//       className="relative bg-[url('./sec1second.jpg')] bg-cover bg-center px-6 py-16"
//       style={{
//         backgroundImage: "url('/pattern-bg.png')",
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="mx-auto max-w-4xl px-6">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {/* First Promo Banner */}
//           <div className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl">
//             <img
//               src="./chickenpromo.png" // Replace with your actual chicken banner image
//               alt="Super Delicious Chicken"
//               className="w-full object-cover"
//             />
//             {/* <div className="absolute inset-0 flex flex-col justify-center bg-black/50 p-8">
//               <div className="max-w-[60%]">
//                 <p className="mb-2 text-sm text-white">
//                   CRISPY, EVERY BITE TASTE
//                 </p>
//                 <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
//                   SUPER DELICIOUS
//                 </h3>
//                 <p className="text-xl font-bold text-yellow-500">50% OFF</p>
//               </div>
//             </div> */}
//           </div>

//           {/* Second Promo Banner */}
//           <div className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl">
//             <img
//               src="./pizzapromo.png" // Replace with your actual pizza banner image
//               alt="Super Delicious Pizza"
//               className="h-full w-full object-cover"
//             />
//             {/* <div className="absolute inset-0 flex flex-col justify-center bg-red-600/50 p-8">
//               <div className="max-w-[60%]">
//                 <p className="mb-2 text-sm text-white">
//                   CRISPY, EVERY BITE TASTE
//                 </p>
//                 <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
//                   Super Delicious Pizza
//                 </h3>
//                 <p className="text-xl font-bold text-white">Limited Offer</p>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoFSec;

// import React from 'react';

// const PromoFSec = () => {
//   return (
//     <div
//       className="relative bg-[url('./sec1second.jpg')] bg-cover bg-center px-6 py-16"
//       style={{
//         backgroundImage: "url('/sec1second.jpg')",
//         backgroundRepeat: 'repeat',
//       }}
//     >
//       <div className="mx-auto max-w-4xl px-6">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//           {/* First Promo Banner - Take 1 column */}
//           <div className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl md:col-span-1">
//             <img
//               src="./chickenpromo.png"
//               alt="Super Delicious Chicken"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Second Promo Banner - Take 2 columns */}
//           <div className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl md:col-span-2">
//             <img
//               src="./pizzapromo.png"
//               alt="Super Delicious Pizza"
//               className="w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoFSec;
import React from 'react';

const PromoFSec = () => {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* First Promo Banner - Take 1 column */}
        <div className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 md:col-span-1">
          <img
            src="./chickenpromo.png"
            alt="Super Delicious Chicken"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Second Promo Banner - Take 2 columns */}
        <div className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 md:col-span-2">
          <img
            src="./pizzapromo.png"
            alt="Super Delicious Pizza"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoFSec;
