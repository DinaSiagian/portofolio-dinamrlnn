// file: components/Footer.tsx

import Link from "next/link";
// Impor ikon dari react-icons
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rose-900 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Kolom 1: Nama dan Copyright */}
          <div>
            <h3 className="text-xl font-bold">Dina Marlina Siagian</h3>
            <p className="text-sm text-rose-200 mt-2">
              © 2025 - Built with Next.js & Tailwind CSS
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="mx-auto">
            <h4 className="font-semibold mb-3">Navigation</h4>
            <div className="flex flex-col space-y-2">
              {/* Link Home ditambahkan */}
              <Link href="/" className="hover:underline text-sm text-rose-100">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:underline text-sm text-rose-100"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="hover:underline text-sm text-rose-100"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="hover:underline text-sm text-rose-100"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Kolom 3: Social Media */}
          <div className="mx-auto md:mx-0 md:ml-auto">
            <h4 className="font-semibold mb-3">Get in Touch</h4>
            <div className="flex space-x-5 text-2xl">
              <a
                href="https://www.linkedin.com/in/dina-marlina-siagian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-rose-200 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/dinamrlnn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="text-rose-200 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:dinamrlnn@gmail.com"
                aria-label="Send Email"
                className="text-rose-200 hover:text-white transition-colors"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+6289617069188"
                aria-label="Call Phone Number"
                className="text-rose-200 hover:text-white transition-colors"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
