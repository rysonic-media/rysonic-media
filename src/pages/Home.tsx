import {
  TrendingUp, Users, Target, Megaphone, BarChart3, Palette,
  ChevronRight, ArrowRight, Star, Calendar, Send, Plus, Minus,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const iconMap: Record<string, any> = {
  Megaphone, Target, Palette, BarChart3, Users, TrendingUp,
};

export default function Home({ onNavigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [hero, setHero] = useState<any>(null);

  const [services, setServices] = useState<any[]>([
    { _id: '1', title: 'Social Media Marketing', description: 'Build and engage your audience across all major social platforms with strategic content and campaigns.', icon: 'Megaphone' },
    { _id: '2', title: 'Performance Advertising', description: 'Data-driven ad campaigns that deliver measurable results and maximize your return on investment.', icon: 'Target' },
    { _id: '3', title: 'Brand Development', description: 'Create a memorable brand identity that resonates with your target audience and stands out.', icon: 'Palette' },
    { _id: '4', title: 'Analytics & Reporting', description: 'Track, measure, and optimize your marketing performance with detailed insights and reports.', icon: 'BarChart3' },
    { _id: '5', title: 'Influencer Marketing', description: 'Connect with the right influencers to amplify your brand message and reach new audiences.', icon: 'Users' },
    { _id: '6', title: 'Growth Strategy', description: 'Develop comprehensive strategies to scale your business and achieve sustainable growth.', icon: 'TrendingUp' },
  ]);

  const [portfolioItems, setPortfolioItems] = useState<any[]>([
    { _id: '1', title: 'E-commerce Fashion Brand', category: 'Social Media', result: '300% increase in engagement', image: { asset: { url: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800' } } },
    { _id: '2', title: 'Tech Startup Launch', category: 'Performance Ads', result: '5x ROI in 3 months', image: { asset: { url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' } } },
    { _id: '3', title: 'Fitness App Campaign', category: 'Brand Development', result: '50K+ downloads', image: { asset: { url: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800' } } },
  ]);

  const [caseStudies, setCaseStudies] = useState<any[]>([
    { _id: '1', client: 'TechNova Solutions', industry: 'Technology', challenge: 'Low brand awareness in competitive market', solution: 'Integrated social media and influencer marketing campaign', results: ['400% increase in social media followers', '250% boost in website traffic', '$2M in new revenue generated'] },
    { _id: '2', client: 'GreenLeaf Organics', industry: 'E-commerce', challenge: 'Poor conversion rates on paid ads', solution: 'Optimized ad targeting and landing page redesign', results: ['180% improvement in conversion rate', '65% reduction in cost per acquisition', '320% ROI on ad spend'] },
  ]);

  const [testimonials, setTestimonials] = useState<any[]>([
    { _id: '1', name: 'Sarah Johnson', company: 'Founder, BeautyBox Co.', content: 'Rysonic Media transformed our social media presence. Their strategic approach increased our engagement by 400% in just 3 months!', rating: 5 },
    { _id: '2', name: 'Michael Chen', company: 'CEO, TechStart Inc.', content: 'The ROI we achieved with Rysonic Media exceeded all expectations. Their performance advertising expertise is unmatched.', rating: 5 },
    { _id: '3', name: 'Emily Rodriguez', company: 'Marketing Director, FitLife', content: 'Working with Rysonic Media has been a game-changer. They truly understand how to build brands that resonate with audiences.', rating: 5 },
  ]);

  const [faqs, setFaqs] = useState<any[]>([
    { _id: '1', question: 'What services does Rysonic Media offer?', answer: 'We specialize in social media marketing, performance advertising, brand development, analytics & reporting, influencer marketing, and growth strategy.' },
    { _id: '2', question: 'How long does it take to see results?', answer: 'While some improvements can be seen within weeks, sustainable growth typically takes 3-6 months.' },
    { _id: '3', question: 'Do you work with small businesses?', answer: 'Absolutely! We work with businesses of all sizes, from startups to established enterprises.' },
    { _id: '4', question: 'What makes Rysonic Media different?', answer: 'Our data-driven approach combined with creative excellence sets us apart. We build comprehensive strategies that deliver measurable results.' },
    { _id: '5', question: 'How do you measure success?', answer: 'Through KPIs specific to your goals including engagement rates, conversion rates, ROI, and revenue growth. We provide detailed monthly reports.' },
  ]);

  const [blogPosts, setBlogPosts] = useState<any[]>([
    { _id: '1', title: '10 Social Media Trends to Watch in 2024', excerpt: 'Stay ahead of the curve with these emerging social media trends.', date: 'Mar 10, 2024', category: 'Social Media', image: { asset: { url: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800' } } },
    { _id: '2', title: 'How to Maximize ROI on Facebook Ads', excerpt: 'Learn proven strategies to optimize your Facebook advertising campaigns.', date: 'Mar 8, 2024', category: 'Advertising', image: { asset: { url: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800' } } },
    { _id: '3', title: 'Building a Strong Brand Identity', excerpt: 'Discover the essential elements of creating a memorable brand.', date: 'Mar 5, 2024', category: 'Branding', image: { asset: { url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800' } } },
  ]);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '',
  });

  useEffect(() => {
    // Hero
    client.fetch(`*[_type == "homePage"][0]{
      heroTitle, heroSubtitle, ctaButtonText, stat1, stat2, stat3
    }`).then((data) => { if (data) setHero(data); }).catch(() => {});

    // Services
    client.fetch(`*[_type == "service"] | order(order asc){
      _id, title, description, icon
    }`).then((data) => { if (data?.length > 0) setServices(data); }).catch(() => {});

    // Portfolio
    client.fetch(`*[_type == "portfolioItem"] | order(order asc)[0...3]{
      _id, title, category, result, image{ asset->{ url } }
    }`).then((data) => { if (data?.length > 0) setPortfolioItems(data); }).catch(() => {});

    // Case Studies
    client.fetch(`*[_type == "caseStudy"] | order(order asc)[0...2]{
      _id, client, industry, challenge, solution, results
    }`).then((data) => { if (data?.length > 0) setCaseStudies(data); }).catch(() => {});

    // Testimonials
    client.fetch(`*[_type == "testimonial"][0...3]{
      _id, name, company, content, rating
    }`).then((data) => { if (data?.length > 0) setTestimonials(data); }).catch(() => {});

    // FAQs
    client.fetch(`*[_type == "faqItem"] | order(order asc){
      _id, question, answer
    }`).then((data) => { if (data?.length > 0) setFaqs(data); }).catch(() => {});

    // Blog Posts
    client.fetch(`*[_type == "blogPost"][0...3]{
      _id, title, excerpt, date, category, image{ asset->{ url } }
    }`).then((data) => { if (data?.length > 0) setBlogPosts(data); }).catch(() => {});
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {hero?.heroTitle || 'Build Your Brand. Grow Your Influence.'}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {hero?.heroSubtitle || 'Rysonic Media helps businesses grow using social media marketing and performance advertising.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors flex items-center justify-center gap-2"
                >
                  {hero?.ctaButtonText || 'Get Started'} <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:border-[#d80000] hover:text-[#d80000] transition-colors"
                >
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-[#d80000] bg-opacity-10 p-3 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-[#d80000]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{hero?.stat1 || '500+ Happy Clients'}</div>
                    <div className="text-sm text-gray-600">{hero?.stat2 || '3X Average ROAS Delivered'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || TrendingUp;
              return (
                <div key={service._id || index} className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#d80000] transition-all duration-300 hover:shadow-lg group">
                  <div className="bg-[#d80000] bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d80000] transition-colors">
                    <Icon className="h-7 w-7 text-[#d80000] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('services')} className="text-[#d80000] font-semibold hover:underline flex items-center gap-2 mx-auto">
              View All Services <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Success stories from brands we've helped grow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={item._id || index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img src={item.image?.asset?.url} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#d80000]">{item.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-[#d80000] font-semibold">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('portfolio')} className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors inline-flex items-center gap-2">
              View Full Portfolio <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real results from real partnerships</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study._id || index} className="bg-gray-50 p-8 rounded-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                  <p className="text-[#d80000] font-semibold">{study.industry}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#d80000] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('case-studies')} className="text-[#d80000] font-semibold hover:underline flex items-center gap-2 mx-auto">
              View All Case Studies <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See what our clients have to say about working with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={t._id || index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#d80000] text-[#d80000]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{t.content}</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('testimonials')} className="text-[#d80000] font-semibold hover:underline flex items-center gap-2 mx-auto">
              Read More Testimonials <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Insights, tips, and strategies to help your business grow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post._id || index} className="bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#d80000] transition-all duration-300 hover:shadow-lg group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img src={post.image?.asset?.url} alt={post.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[#d80000] text-white px-3 py-1 rounded-full text-xs font-semibold">{post.category}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />{post.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#d80000] transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-[#d80000] font-semibold hover:underline flex items-center gap-1">
                    Read More <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('blog')} className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors inline-flex items-center gap-2">
              Visit Our Blog <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about working with Rysonic Media</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq._id || index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? <Minus className="h-5 w-5 text-[#d80000] flex-shrink-0" /> : <Plus className="h-5 w-5 text-[#d80000] flex-shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('faq')} className="text-[#d80000] font-semibold hover:underline flex items-center gap-2 mx-auto">
              View All FAQs <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to grow your business? Let's start a conversation</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors" placeholder="+1 (555) 123-4567" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="w-full bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors flex items-center justify-center gap-2">
              Send Message <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
