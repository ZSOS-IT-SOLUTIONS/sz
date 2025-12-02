import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onCareersClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCareersClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const page = href.replace('#', '');

    // Special handling for careers to show popup first
    if (page === 'careers') {
      onCareersClick();
    }
    setMobileMenuOpen(false);
  };

  const getLinkProps = (href: string) => {
    const page = href.replace('#', '');
    if (page === 'careers') {
      return { to: '/careers', onClick: (e: React.MouseEvent) => handleNavClick(e, href) };
    }
    return { to: page === 'home' ? '/' : `/${page}` };
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-soft transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md" onClick={() => onNavigate('home')}>
             <img src="images/logo.png" alt="SkyZuri Techbrides Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-accent font-agraham tracking-tight">
            SkyZuri Techbridge
          </h1>
        </div>

        {/* Desktop Navigation & CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 items-center">
            {NAV_LINKS.map((link) => {
              const pageName = link.href.replace('#', '');
              const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);
              const isActive = currentPath === pageName;

              const linkProps = getLinkProps(link.href);

              return (
                <Link
                  key={link.label}
                  {...linkProps}
                  className={`font-semibold text-sm transition-colors relative group font-montserrat ${
                    isActive ? 'text-accent' : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </nav>
          <a
            href="http://calendly.com/mohamedmurshalibrahim"
            target="_blank"
            rel="noopener noreferrer"
            className="shining-button text-white font-bold py-2 px-4 rounded-full text-sm"
          >
            Schedule a Meeting
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="http://calendly.com/mohamedmurshalibrahim"
            target="_blank"
            rel="noopener noreferrer"
            className="shining-button text-white font-bold py-2 px-4 rounded-full text-sm"
          >
            Schedule
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t flex flex-col py-4 px-6 animate-fade-in-down">
          {NAV_LINKS.map((link) => {
            const linkProps = getLinkProps(link.href);
            return (
              <Link
                key={link.label}
                {...linkProps}
                className="py-3 text-primary font-semibold border-b border-gray-100 last:border-0 hover:text-accent"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;