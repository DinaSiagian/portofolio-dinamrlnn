import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold">Dina Marlina Siagian</h3>
          <p className="text-sm text-green-200">
            © 2025 - Built with Next.js & Tailwind CSS
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <h4 className="font-semibold mb-2">Navigation</h4>
          <div className="flex space-x-4">
            <Link href="/about" className="hover:underline text-sm">
              About Me
            </Link>
            <Link href="/projects" className="hover:underline text-sm">
              Projects
            </Link>
            <Link href="/contact" className="hover:underline text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
