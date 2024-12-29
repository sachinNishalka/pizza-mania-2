import { HiOutlineShoppingCart } from "react-icons/hi";

export default function NavBar() {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
            <div className="rotate-45 text-white text-xl">🍕</div>
          </div>
          <span className="text-xl font-semibold text-gray-800">
            pizza mania
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-orange-500">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            Menu
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <HiOutlineShoppingCart className="w-6 h-6 text-gray-600" />

            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <button className="hidden md:block px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
            Signup
          </button>
          <button className="hidden md:block px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
