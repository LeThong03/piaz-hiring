// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-black">
              Piaz Capital
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;