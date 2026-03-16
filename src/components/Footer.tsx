import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "siteSettings"][0]{
      description, address, phone, email,
      facebook, instagram, twitter, linkedin
    }`).then((data) => { if (data) setSettings(data); }).catch(() => {});
  }, []);

  const handleNavigate = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#d80000]">Rysonic</span> Media
            </h3>
            <p className="text-gray-400 mb-4">
              {settings?.description || 'Building brands and growing influence through strategic digital marketing.'}
            </p>
            <div className="flex space-x-4">
              <a href={settings?.facebook || '#'} className="text-gray-400 hover:text-[#d80000] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={settings?.instagram || '#'} className="text-gray-400 hover:text-[#d80000] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={settings?.twitter || '#'} className="text-gray-400 hover:text-[#d80000] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={settings?.linkedin || '#'} className="text-gray-400 hover:text-[#d80000] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Case Studies'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigate(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-400 hover:text-[#d80000] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigate(item.toLowerCase())}
                    className="text-gray-400 hover:text-[#d80000] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#d80000] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{settings?.address || '123 Business Street, Marketing City, MC 12345'}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#d80000] flex-shrink-0" />
                <span className="text-gray-400">{settings?.phone || '+1 (555) 123-4567'}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#d80000] flex-shrink-0" />
                <span className="text-gray-400">{settings?.email || 'hello@rysonicmedia.com'}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rysonic Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
