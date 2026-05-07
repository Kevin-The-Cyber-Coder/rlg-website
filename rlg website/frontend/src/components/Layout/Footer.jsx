import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin,
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const supportLinks = [
    { name: 'Donate', path: '/donate' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Partner With Us', path: '/partner' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Use', path: '/terms' },
  ];

  const socialIcons = [
    { icon: faFacebook, link: 'https://facebook.com', color: 'hover:text-[#1877f2]' },
    { icon: faTwitter, link: 'https://twitter.com', color: 'hover:text-[#1da1f2]' },
    { icon: faInstagram, link: 'https://instagram.com', color: 'hover:text-[#e4405f]' },
    { icon: faLinkedin, link: 'https://linkedin.com', color: 'hover:text-[#0077b5]' },
    { icon: faYoutube, link: 'https://youtube.com', color: 'hover:text-[#ff0000]' },
  ];

  return (
    <footer className="bg-ngo-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-ngo-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">RLG</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Rising Leaders</h3>
                <p className="text-xs text-gray-400">of Generation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering future leaders through education, mentorship, and community development programs.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color}`}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-ngo-green transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-ngo-green transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-ngo-green mt-1" />
                <p className="text-gray-300 text-sm">
                  123 Leadership Avenue, Suite 100<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-ngo-green" />
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-ngo-green" />
                <p className="text-gray-300 text-sm">info@rlg.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rising Leaders of Generation. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
              Made with <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" /> for humanity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;