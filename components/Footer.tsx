// components/Footer.tsx
"use client";
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Return to top button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={scrollToTop}
            className="border border-white rounded-full px-8 py-2 hover:bg-white hover:text-black transition-colors"
          >
            RETURN TO TOP
          </button>
        </div>

        {/* Decorative line */}
        <div className="mb-12">
          <div className="h-px bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"></div>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <Link href="/contact" className="hover:text-gray-300">
            CONTACT
          </Link>
          <Link href="https://twitter.com/your-handle" className="hover:text-gray-300">
            X
          </Link>
          <Link href="https://linkedin.com/company/your-company" className="hover:text-gray-300">
            LINKEDIN
          </Link>
          <Link href="/careers" className="hover:text-gray-300">
            CAREERS
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          © 2024 Piaz Capital. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;