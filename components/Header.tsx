// file: components/Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Impor ikon untuk tombol hamburger
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  // State untuk melacak status menu (terbuka/tertutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-rose-800">
          DinaMarlina.
        </Link>

        {/* Navigasi untuk Desktop (Medium screen ke atas) */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-rose-800 text-white"
                    : "text-gray-600 hover:bg-rose-100 hover:text-rose-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Tombol Hamburger (Hanya tampil di Mobile/Tablet) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-rose-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Menu untuk Mobile (Muncul saat isMenuOpen true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full">
          <ul className="flex flex-col items-center space-y-2 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="w-full text-center">
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)} // Tutup menu setelah link diklik
                    className={`block py-3 transition-colors ${
                      isActive
                        ? "bg-rose-800 text-white"
                        : "text-gray-600 hover:bg-rose-100 hover:text-rose-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
