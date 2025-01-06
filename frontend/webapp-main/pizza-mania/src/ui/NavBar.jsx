import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full overflow-hidden bg-white px-6 py-2 font-main shadow-sm drop-shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="w-20">
            <img src="./logo2.png" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link to="home" className="text-mainBlack hover:text-secondaryRed">
            Home
          </Link>
          <Link to="about" className="text-mainBlack hover:text-secondaryRed">
            About Us
          </Link>
          <Link to="menu" className="text-mainBlack hover:text-secondaryRed">
            Menu
          </Link>
          <Link to="contact" className="text-mainBlack hover:text-secondaryRed">
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <HiOutlineShoppingCart className="h-6 w-6 text-mainBlack" />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondaryGreen text-xs text-white">
              0
            </span>
          </div>
          <button className="hidden rounded-md bg-gray-100 px-4 py-2 text-mainBlack hover:bg-gray-200 md:block">
            Signup
          </button>
          <button className="hidden rounded-md bg-secondaryRed px-4 py-2 text-white hover:bg-secondaryRedShade md:block">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
