import React, { memo } from 'react';
import { BackgroundBeams } from './ui/background-beams';
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = memo(function Footer() {
  return (
    <footer className="relative w-full bg-black/80 backdrop-blur-sm">
      {/* Background Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundBeams className="opacity-50" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white">Nexmove</h3>
                <span className="text-blue-500 text-sm font-semibold">Solutions</span>
              </div>
              
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-slate-100 flex-shrink-0 mt-0.5" />
                  <p>
                    M-3, Second floor, Neighbourhood<br />
                    Complex Sector 4, Near State Bank Of<br />
                    India, Nerul, Navi Mumbai, Maharashtra<br />
                    400706
                  </p>
                </div>
                
                <div className="flex gap-3 items-center">
                  <Mail size={18} className="text-slate-100 flex-shrink-0" />
                  <a href="mailto:sales@nexmoves.in" className="hover:text-slate-200 transition-colors">
                    sales@nexmoves.in
                  </a>
                </div>
                
                <div className="flex gap-3 items-center">
                  <Phone size={18} className="text-slate-100 flex-shrink-0" />
                  <a href="tel:+919137361797" className="hover:text-slate-200 transition-colors">
                    +91 9137361797
                  </a>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#about" className="hover:text-slate-200 transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-slate-200 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-slate-200 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="hover:text-slate-200 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-slate-200 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#web-dev" className="hover:text-cyan-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#software-dev" className="hover:text-cyan-400 transition-colors">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#app-dev" className="hover:text-cyan-400 transition-colors">
                    Application Development
                  </a>
                </li>
                <li>
                  <a href="#digital-marketing" className="hover:text-cyan-400 transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#ecommerce" className="hover:text-cyan-400 transition-colors">
                    E-commerce Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Additional Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">More Services</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#content-writing" className="hover:text-cyan-400 transition-colors">
                    Content Writing
                  </a>
                </li>
                <li>
                  <a href="#graphic-design" className="hover:text-cyan-400 transition-colors">
                    Graphic Designing
                  </a>
                </li>
                <li>
                  <a href="#cloud" className="hover:text-cyan-400 transition-colors">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="#cybersecurity" className="hover:text-cyan-400 transition-colors">
                    Cybersecurity Solutions
                  </a>
                </li>
                <li>
                  <a href="#pr" className="hover:text-cyan-400 transition-colors">
                    Public Relation(PR)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#terms" className="hover:text-cyan-400 transition-colors">
                Terms And Condition
              </a>
              <a href="#privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
            </div>

            <p className="text-sm text-gray-400 text-center md:text-right">
              ©2024 <span className="text-white font-semibold">Nexmove Solutions</span> All Right Reserved
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="p-2 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors text-gray-400"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#linkedin"
                className="p-2 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors text-gray-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#twitter"
                className="p-2 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors text-gray-400"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#instagram"
                className="p-2 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors text-gray-400"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
