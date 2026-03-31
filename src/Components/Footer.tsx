import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    platform: [
      { name: 'Find Tutors', href: '#' },
      { name: 'Become a Tutor', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Pricing', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Safety', href: '#' },
      { name: 'Community', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  return (
    <footer className="bg-primary text-accent">
      <hr/>
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4 text-accent">tuteConnect</h3>
            <p className="text-tersary mb-6 max-w-md font-body">
              Bridge the gap between curiosity and mastery. Connect with expert tutors 
              or share your knowledge with students worldwide.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-accent">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-tersary hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-accent">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-tersary hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-accent">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-tersary hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-tersary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-heading font-semibold mb-2 text-accent">Stay Updated</h4>
              <p className="font-body text-tersary text-sm">Get the latest updates on new features and tutors.</p>
            </div>
            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-primary border border-tersary rounded-lg focus:outline-none focus:border-accent text-accent placeholder-tersary font-body"
              />
              <button className="px-6 py-2 bg-accent text-primary font-body font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-tersary flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-tersary text-sm mb-4 md:mb-0">
            © 2026 tuteConnect. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-tersary hover:text-accent text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;