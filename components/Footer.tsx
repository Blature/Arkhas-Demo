import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Arkhas
            </h3>
            <p className="text-gray-400">
              Your trusted partner for comprehensive business solutions. From digital strategy to premium transportation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Marketing Strategy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Social Media</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Programming</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Car Rental</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Arkhas Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
