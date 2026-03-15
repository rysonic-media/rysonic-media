import { Megaphone, Target, Palette, BarChart3, Users, TrendingUp, Smartphone, Mail, Video, Search, ShoppingCart, PenTool } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

const iconMap: any = { Megaphone, Target, Palette, BarChart3, Users, TrendingUp, Smartphone, Mail, Video, Search, ShoppingCart, PenTool };

const fallbackServices = [
  { _id: '1', title: 'Social Media Marketing', description: 'Build and engage your audience across all major social platforms with strategic content and campaigns.', icon: 'Megaphone', features: ['Content strategy & planning', 'Community management', 'Social media advertising', 'Influencer partnerships', 'Analytics & reporting'], published: true },
  { _id: '2', title: 'Performance Advertising', description: 'Data-driven ad campaigns that deliver measurable results and maximize your return on investment.', icon: 'Target', features: ['Google Ads management', 'Facebook & Instagram ads', 'LinkedIn advertising', 'Retargeting campaigns', 'A/B testing & optimization'], published: true },
  { _id: '3', title: 'Brand Development', description: 'Create a memorable brand identity that resonates with your target audience and stands out.', icon: 'Palette', features: ['Brand strategy', 'Logo & visual identity', 'Brand guidelines', 'Brand positioning', 'Messaging framework'], published: true },
  { _id: '4', title: 'Analytics & Reporting', description: 'Track, measure, and optimize your marketing performance with detailed insights and reports.', icon: 'BarChart3', features: ['Custom dashboards', 'Performance tracking', 'Conversion optimization', 'ROI analysis', 'Monthly reporting'], published: true },
  { _id: '5', title: 'Influencer Marketing', description: 'Connect with the right influencers to amplify your brand message and reach new audiences.', icon: 'Users', features: ['Influencer identification', 'Campaign management', 'Contract negotiation', 'Content oversight', 'Performance tracking'], published: true },
  { _id: '6', title: 'Growth Strategy', description: 'Develop comprehensive strategies to scale your business and achieve sustainable growth.', icon: 'TrendingUp', features: ['Market research', 'Competitor analysis', 'Growth roadmap', 'Channel optimization', 'Strategic consulting'], published: true },
  { _id: '7', title: 'Content Creation', description: 'Professional photo and video content that captures attention and drives engagement.', icon: 'Video', features: ['Video production', 'Photography', 'Graphic design', 'Copywriting', 'Animation'], published: true },
  { _id: '8', title: 'Email Marketing', description: 'Build and nurture customer relationships with targeted email campaigns that convert.', icon: 'Mail', features: ['Email strategy', 'List management', 'Template design', 'Automation workflows', 'Performance tracking'], published: true },
  { _id: '9', title: 'SEO Services', description: 'Improve your search visibility and drive organic traffic with proven SEO strategies.', icon: 'Search', features: ['Keyword research', 'On-page optimization', 'Technical SEO', 'Link building', 'Local SEO'], published: true },
  { _id: '10', title: 'Mobile Marketing', description: 'Reach customers on the go with optimized mobile campaigns and app marketing.', icon: 'Smartphone', features: ['App store optimization', 'Mobile ad campaigns', 'SMS marketing', 'Push notifications', 'Mobile analytics'], published: true },
  { _id: '11', title: 'E-commerce Marketing', description: 'Drive sales and grow your online store with specialized e-commerce marketing strategies.', icon: 'ShoppingCart', features: ['Product feed optimization', 'Shopping campaigns', 'Conversion rate optimization', 'Cart abandonment', 'Marketplace advertising'], published: true },
  { _id: '12', title: 'Creative Services', description: 'Stand out with compelling creative that captures your brand essence and engages audiences.', icon: 'PenTool', features: ['Campaign concepts', 'Ad creative', 'Landing pages', 'Brand assets', 'Marketing collateral'], published: true },
];

export default function Services() {
  const [services, setServices] = useState<any[]>(fallbackServices);

  useEffect(() => {
    client.fetch(`*[_type == "service" && published == true]{
      _id, title, description, published
    }`).then((data) => {
      if (data && data.length > 0) setServices(data);
    }).catch(() => {});
  }, []);

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Megaphone;
              return (
                <div key={service._id} className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#d80000] transition-all duration-300 hover:shadow-xl group">
                  <div className="bg-[#d80000] bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d80000] transition-colors">
                    <IconComponent className="h-7 w-7 text-[#d80000] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  {service.features && (
                    <ul className="space-y-2">
                      {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d80000] mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how our services can help your business grow</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
            className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
