import { ChevronRight, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      client: 'TechNova Solutions',
      industry: 'Technology',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Low brand awareness in a highly competitive B2B technology market with limited marketing budget.',
      solution: 'Developed an integrated social media and influencer marketing campaign targeting decision makers in the tech industry. Created thought leadership content and partnered with industry influencers to amplify reach.',
      results: [
        '400% increase in social media followers',
        '250% boost in website traffic',
        '$2M in new revenue generated',
        '85% improvement in brand recognition',
      ],
      testimonial: {
        text: 'Rysonic Media completely transformed our digital presence. Their strategic approach helped us stand out in a crowded market.',
        author: 'John Smith, CEO',
      },
    },
    {
      client: 'GreenLeaf Organics',
      industry: 'E-commerce',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Poor conversion rates on paid advertising campaigns and high customer acquisition costs limiting growth potential.',
      solution: 'Completely overhauled advertising strategy with detailed audience segmentation, landing page optimization, and A/B testing. Implemented retargeting campaigns and email marketing automation.',
      results: [
        '180% improvement in conversion rate',
        '65% reduction in cost per acquisition',
        '320% ROI on ad spend',
        '150% increase in average order value',
      ],
      testimonial: {
        text: 'The ROI we achieved exceeded all expectations. Rysonic Media\'s data-driven approach made all the difference.',
        author: 'Sarah Chen, Founder',
      },
    },
    {
      client: 'FitLife Wellness',
      industry: 'Health & Fitness',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Launching a new fitness app in a saturated market with established competitors and limited brand recognition.',
      solution: 'Created a comprehensive pre-launch and post-launch marketing strategy including influencer partnerships, content marketing, and performance advertising across multiple channels.',
      results: [
        '50,000+ app downloads in first month',
        '4.8 star average rating',
        '35% conversion from free to paid',
        'Featured in App Store top charts',
      ],
      testimonial: {
        text: 'Our app launch was a huge success thanks to Rysonic Media. They helped us build momentum and sustain growth.',
        author: 'Marcus Johnson, Co-founder',
      },
    },
    {
      client: 'Luxe Hotels Group',
      industry: 'Hospitality',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Declining bookings during off-season and need to attract younger demographics while maintaining luxury positioning.',
      solution: 'Developed a social-first strategy showcasing unique experiences through Instagram and TikTok. Created seasonal campaigns and partnered with travel influencers to drive bookings.',
      results: [
        '300% increase in direct bookings',
        '45% younger demographic reach',
        '500% Instagram engagement growth',
        '95% positive sentiment in reviews',
      ],
      testimonial: {
        text: 'Rysonic Media helped us connect with a new generation of travelers while staying true to our luxury brand.',
        author: 'Emily White, Marketing Director',
      },
    },
    {
      client: 'CloudSync Software',
      industry: 'SaaS',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Low quality leads and long sales cycles preventing rapid growth and increasing customer acquisition costs.',
      solution: 'Implemented account-based marketing strategy with LinkedIn advertising, targeted content, and marketing automation. Created lead scoring system and nurture campaigns.',
      results: [
        '220% increase in qualified leads',
        '40% reduction in sales cycle',
        '180% growth in demo requests',
        '$5M pipeline generated',
      ],
      testimonial: {
        text: 'The quality of leads improved dramatically. Our sales team is now working with decision-makers ready to buy.',
        author: 'David Park, VP of Sales',
      },
    },
    {
      client: 'BeautyBox Cosmetics',
      industry: 'Beauty & Personal Care',
      image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Needed to differentiate from competitors and build authentic community around clean beauty products.',
      solution: 'Created user-generated content campaign, leveraged micro-influencers, and built engaged community through social media. Developed educational content about clean beauty.',
      results: [
        '600% increase in UGC submissions',
        '250% social media growth',
        '90% positive brand sentiment',
        '4x increase in repeat purchases',
      ],
      testimonial: {
        text: 'They helped us build a community, not just customers. The authenticity they brought to our brand is invaluable.',
        author: 'Lisa Martinez, Brand Manager',
      },
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dive deep into our success stories and discover how we've helped businesses overcome challenges and achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  <img
                    src={study.image}
                    alt={study.client}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="inline-block bg-[#d80000] bg-opacity-10 text-[#d80000] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {study.industry}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{study.client}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-[#d80000] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-900 font-semibold text-sm">{result}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#d80000]">
                      <p className="text-gray-600 italic mb-4">"{study.testimonial.text}"</p>
                      <p className="text-gray-900 font-semibold">{study.testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready for Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create measurable results for your business
          </p>
          <button className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
