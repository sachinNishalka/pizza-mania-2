

export default function Ceo() {
    return (
        <div className="relative bg-pink-50 py-20">
          {/* Decorative Images */}
          <img src="/frontend/webapp-main/pizza-mania/public/burger.png" alt="" className="absolute left-20 top-20 w-24 opacity-30" />
          <img src="/fry.png" alt="" className="absolute right-20 top-40 w-20 opacity-30" />
          <img src="/pizza.png" alt="" className="absolute right-40 bottom-20 w-24 opacity-30" />
    
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Author Info */}
            <h3 className="text-2xl font-bold mb-1">Piter Bowman</h3>
            <p className="text-yellow-500 mb-8">Business CEO & Co Founder</p>
    
            {/* Testimonial Text */}
            <blockquote className="text-3xl font-bold leading-snug mb-10">
             Thank You For Dinner Last Night. It Was Amazing!! I Have Say It is The Best Meal I Have Had In Quite Some Time. Will Definitely Be Seeing More Eating Next Year.
            </blockquote>
    
            {/* Rating Stars */}
            {/* <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div> */}
    
            {/* Profile Images */}
            <div className="flex justify-center items-center gap-4">
              <img src="/worker.png" alt="Testimonial" className="w-12 h-12 rounded-full" />
              <div className="w-16 h-16 bg-yellow-400 rounded-full overflow-hidden">
                <img src="/3.png" alt="Main testimonial" className="w-full h-full object-cover" />
              </div>
              <img src="/famer.png" alt="Testimonial" className="w-12 h-12 rounded-full" />
            </div>
          </div>
        </div>
      );
}
