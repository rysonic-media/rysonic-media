import {
  Megaphone,
  Target,
  Palette,
  BarChart3,
  Users,
  TrendingUp,
  Smartphone,
  Mail,
  Video,
  Search,
  ShoppingCart,
  PenTool,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build and engage your audience across all major social platforms with strategic content and campaigns.',
      features: [
        'Content strategy & planning',
        'Community management',
        'Social media advertising',
        'Influencer partnerships',
        'Analytics & reporting',
      ],
    },
    {
      icon: Target,
      title: 'Performance Advertising',
      description: 'Data-driven ad campaigns that deliver measurable results and maximize your return on investment.',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'LinkedIn advertising',
        'Retargeting campaigns',
        'A/B testing & optimization',
      ],
    },
    {
      icon: Palette,
      title: 'Brand Development',
      description: 'Create a memorable brand identity that resonates with your target audience and stands out.',
      features: [
        'Brand strategy',
        'Logo & visual identity',
        'Brand guidelines',
        'Brand positioning',
        'Messaging framework',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track, measure, and optimize your marketing performance with detailed insights and reports.',
      features: [
        'Custom dashboards',
        'Performance tracking',
        'Conversion optimization',
        'ROI analysis',
        'Monthly reporting',
      ],
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect with the right influencers to amplify your brand message and reach new audiences.',
      features: [
        'Influencer identification',
        'Campaign management',
        'Contract negotiation',
        'Content oversight',
        'Performance tracking',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Develop comprehensive strategies to scale your business and achieve sustainable growth.',
      features: [
        'Market research',
        'Competitor analysis',
        'Growth roadmap',
        'Channel optimization',
        'Strategic consulting',
      ],
    },
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Professional photo and video content that captures attention and drives engagement.',
      features: [
        'Video production',
        'Photography',
        'Graphic design',
        'Copywriting',
        'Animation',
      ],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Build and nurture customer relationships with targeted email campaigns that convert.',
      features: [
        'Email strategy',
        'List management',
        'Template design',
        'Automation workflows',
        'Performance tracking',
      ],
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Improve your search visibility and drive organic traffic with proven SEO strategies.',
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO',
        'Link building',
        'Local SEO',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on the go with optimized mobile campaigns and app marketing.',
      features: [
        'App store optimization',
        'Mobile ad campaigns',
        'SMS marketing',
        'Push notifications',
        'Mobile analytics',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Marketing',
      description: 'Drive sales and grow your online store with specialized e-commerce marketing strategies.',
      features: [
        'Product feed optimization',
        'Shopping campaigns',
        'Conversion rate optimization',
        'Cart abandonment',
        'Marketplace advertising',
      ],
    },
    {
      icon: PenTool,
      title: 'Creative Services',
      description: 'Stand out with compelling creative that captures your brand essence and engages audiences.',
      features: [
        'Campaign concepts',
        'Ad creative',
        'Landing pages',
        'Brand assets',
        'Marketing collateral',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to help your business thrive in the digital age. From strategy to execution, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#d80000] transition-all duration-300 hover:shadow-xl group"
              >
                <div className="bg-[#d80000] bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d80000] transition-colors">
                  <service.icon className="h-7 w-7 text-[#d80000] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d80000] mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help your business grow
          </p>
          <button className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
