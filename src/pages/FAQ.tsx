import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

const fallbackFaqs = [
  { _id: '1', question: 'What services does Rysonic Media offer?', answer: 'We specialize in social media marketing, performance advertising, brand development, analytics & reporting, influencer marketing, and growth strategy.', order: 1, published: true },
  { _id: '2', question: 'What industries do you work with?', answer: 'We work with businesses across various industries including e-commerce, technology, SaaS, hospitality, healthcare, beauty, fitness, and more.', order: 2, published: true },
  { _id: '3', question: 'Do you work with small businesses?', answer: 'Absolutely! We work with businesses of all sizes, from startups and small businesses to mid-sized companies and established enterprises.', order: 3, published: true },
  { _id: '4', question: 'How much do your services cost?', answer: 'Our pricing varies based on the scope of services, campaign complexity, and your specific needs. Contact us for a personalized quote.', order: 4, published: true },
  { _id: '5', question: 'How long does it take to see results?', answer: 'While some improvements can be seen within the first few weeks, sustainable growth typically takes 3-6 months.', order: 5, published: true },
  { _id: '6', question: 'How do you measure success?', answer: 'Success is measured through KPIs specific to your goals, including engagement rates, conversion rates, ROI, brand awareness metrics, and revenue growth.', order: 6, published: true },
  { _id: '7', question: 'What platforms do you advertise on?', answer: 'We manage campaigns across Facebook, Instagram, LinkedIn, Twitter, TikTok, Google Ads, YouTube, Pinterest, and Snapchat.', order: 7, published: true },
  { _id: '8', question: 'Do I need to provide creative assets?', answer: 'Not necessarily. We offer complete creative services including photography, videography, graphic design, and copywriting.', order: 8, published: true },
  { _id: '9', question: 'Will I have access to my ad accounts?', answer: 'Yes, you maintain full ownership and access to all your advertising accounts and business assets.', order: 9, published: true },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>('1');
  const [displayFaqs, setDisplayFaqs] = useState<any[]>(fallbackFaqs);

  useEffect(() => {
    // Fetch ALL faqs including unpublished to check if CMS has data
    client.fetch(`*[_type == "faqItem"] | order(order asc){
      _id, question, answer, order, published
    }`).then((data) => {
      if (data && data.length > 0) {
        // CMS has data — show only published ones
        const published = data.filter((f: any) => f.published === true);
        setDisplayFaqs(published);
      }
      // If no data in CMS — keep fallback
    }).catch(() => {
      // Error — keep fallback
    });
  }, []);

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
          <div className="space-y-4">
            {displayFaqs.map((faq) => (
              <div key={faq._id} className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-gray-100 hover:border-[#d80000] transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === faq._id ? null : faq._id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === faq._id ? (
                    <Minus className="h-5 w-5 text-[#d80000] flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#d80000] flex-shrink-0" />
                  )}
                </button>
                {openFaq === faq._id && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
            className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
