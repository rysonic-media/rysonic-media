import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does Rysonic Media offer?',
          answer: 'We specialize in social media marketing, performance advertising, brand development, analytics & reporting, influencer marketing, and growth strategy. Our comprehensive approach ensures all aspects of your digital presence work together seamlessly to achieve your business goals.',
        },
        {
          question: 'What industries do you work with?',
          answer: 'We work with businesses across various industries including e-commerce, technology, SaaS, hospitality, healthcare, beauty, fitness, and more. Our strategies are customized to fit the unique needs and challenges of each industry.',
        },
        {
          question: 'Do you work with small businesses?',
          answer: 'Absolutely! We work with businesses of all sizes, from startups and small businesses to mid-sized companies and established enterprises. Our strategies are tailored to your specific needs, goals, and budget, regardless of your company size.',
        },
      ],
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          question: 'How much do your services cost?',
          answer: 'Our pricing varies based on the scope of services, campaign complexity, and your specific needs. We offer customized packages and flexible pricing models. Contact us for a personalized quote based on your requirements and goals.',
        },
        {
          question: 'Do you offer package deals?',
          answer: 'Yes, we offer comprehensive package deals that combine multiple services at discounted rates. These packages are designed to provide maximum value and better results through integrated marketing approaches.',
        },
        {
          question: 'What is your minimum contract length?',
          answer: 'We typically recommend a minimum of 3 months to see meaningful results, though this can vary based on your goals and the services you choose. We also offer project-based work for specific campaigns or initiatives.',
        },
      ],
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          question: 'How long does it take to see results?',
          answer: 'While some improvements can be seen within the first few weeks, sustainable growth typically takes 3-6 months. We focus on building long-term success rather than quick fixes, ensuring your brand grows steadily and authentically with measurable improvements along the way.',
        },
        {
          question: 'What is your onboarding process like?',
          answer: 'Our onboarding includes an initial discovery call, brand analysis, competitive research, goal setting, and strategy development. We take the time to understand your business, audience, and objectives before launching any campaigns.',
        },
        {
          question: 'How often will we communicate?',
          answer: 'We believe in transparent and regular communication. You\'ll have a dedicated account manager, receive weekly updates, attend monthly strategy calls, and have access to real-time reporting dashboards. We\'re also available via email and chat for any questions.',
        },
      ],
    },
    {
      category: 'Results & Reporting',
      questions: [
        {
          question: 'How do you measure success?',
          answer: 'Success is measured through key performance indicators (KPIs) specific to your goals, including engagement rates, conversion rates, ROI, brand awareness metrics, website traffic, and revenue growth. We provide detailed monthly reports and analytics dashboards.',
        },
        {
          question: 'What kind of reporting do you provide?',
          answer: 'We provide comprehensive monthly reports including campaign performance, analytics insights, ROI analysis, and strategic recommendations. You\'ll also have 24/7 access to real-time dashboards showing all key metrics and performance data.',
        },
        {
          question: 'Can you guarantee specific results?',
          answer: 'While we can\'t guarantee specific numbers due to the dynamic nature of digital marketing, we do guarantee our commitment to delivering the best possible results. Our strategies are data-driven and proven, and we continuously optimize to maximize your ROI.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What platforms do you advertise on?',
          answer: 'We manage campaigns across all major platforms including Facebook, Instagram, LinkedIn, Twitter, TikTok, Google Ads, YouTube, Pinterest, and Snapchat. We recommend platforms based on where your target audience is most active.',
        },
        {
          question: 'Do I need to provide creative assets?',
          answer: 'Not necessarily. We offer complete creative services including photography, videography, graphic design, and copywriting. However, if you have existing brand assets, we\'re happy to work with them and integrate them into our campaigns.',
        },
        {
          question: 'Will I have access to my ad accounts?',
          answer: 'Yes, you maintain full ownership and access to all your advertising accounts and business assets. We believe in transparency and ensuring you have complete control over your digital properties.',
        },
      ],
    },
  ];

  let questionIndex = 0;

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#d80000]">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => {
                    const currentIndex = questionIndex++;
                    return (
                      <div key={currentIndex} className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-gray-100 hover:border-[#d80000] transition-colors">
                        <button
                          onClick={() => setOpenFaq(openFaq === currentIndex ? null : currentIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                          {openFaq === currentIndex ? (
                            <Minus className="h-5 w-5 text-[#d80000] flex-shrink-0" />
                          ) : (
                            <Plus className="h-5 w-5 text-[#d80000] flex-shrink-0" />
                          )}
                        </button>
                        {openFaq === currentIndex && (
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-[#d80000] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>
          <button className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
