import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'social-media', 'performance-ads', 'branding', 'e-commerce'];

  const portfolioItems = [
    {
      title: 'E-commerce Fashion Brand',
      category: 'social-media',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '300% increase in engagement',
      description: 'Transformed social media presence with strategic content and influencer partnerships.',
    },
    {
      title: 'Tech Startup Launch',
      category: 'performance-ads',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '5x ROI in 3 months',
      description: 'Launched targeted ad campaigns that drove significant user acquisition and revenue growth.',
    },
    {
      title: 'Fitness App Campaign',
      category: 'branding',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '50K+ downloads',
      description: 'Developed comprehensive brand strategy and visual identity that resonated with fitness enthusiasts.',
    },
    {
      title: 'Organic Food Retailer',
      category: 'e-commerce',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '250% sales growth',
      description: 'Optimized e-commerce platform and implemented conversion-focused marketing strategies.',
    },
    {
      title: 'Luxury Hotel Chain',
      category: 'social-media',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '400% follower growth',
      description: 'Created compelling visual content strategy that showcased luxury experiences.',
    },
    {
      title: 'SaaS Platform',
      category: 'performance-ads',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '150% lead generation',
      description: 'Implemented multi-channel performance marketing strategy targeting B2B decision makers.',
    },
    {
      title: 'Coffee Shop Chain',
      category: 'branding',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: 'Complete rebrand',
      description: 'Refreshed brand identity to appeal to younger demographics while maintaining loyalty.',
    },
    {
      title: 'Beauty Products',
      category: 'e-commerce',
      image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '180% conversion rate',
      description: 'Optimized product pages and checkout flow, integrated email marketing automation.',
    },
    {
      title: 'Real Estate Agency',
      category: 'social-media',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '200% qualified leads',
      description: 'Leveraged Facebook and Instagram to showcase properties and generate quality leads.',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our successful campaigns and see how we've helped businesses across various industries achieve their marketing goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-[#d80000] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#d80000]">
                    {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-[#d80000] font-bold text-lg">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Want Similar Results?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create a success story for your brand
          </p>
          <button className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
