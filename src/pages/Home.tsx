import {
  TrendingUp, Users, Target, Megaphone, BarChart3, Palette,
  ChevronRight, ArrowRight, Star, Calendar, Send, Plus, Minus,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // CMS States
  const [hero, setHero] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '',
  });

  useEffect(() => {
    // Hero
    client.fetch(`*[_type == "heroSection"][0]{
  heading, headingHighlight, description,
  primaryButtonText, secondaryButtonText,
  statsNumber, statsLabel,
  image{ asset->{ url } }
}`).then((data) => {
  console.log('Hero data:', data);
  if (data) setHero(data);
}).catch((err) => {
  console.log('Hero error:', err);
});
    // Services
    client.fetch(`*[_type == "service" && published == true] | order(order asc){
      _id, title, description
    }`).then((data) => { if (data?.length > 0) setServices(data); }).catch(() => {});

    // Portfolio
    client.fetch(`*[_type == "portfolioItem" && published == true] | order(order asc)[0...3]{
      _id, title, category, result, image{ asset->{ url } }
    }`).then((data) => { if (data?.length > 0) setPortfolioItems(data); }).catch(() => {});

    // Case Studies
    client.fetch(`*[_type == "caseStudy" && published == true] | order(order asc)[0...2]{
      _id, client, industry, challenge, solution, results
    }`).then((data) => { if (data?.length > 0) setCaseStudies(data); }).catch(() => {});

    // Testimonials
    client.fetch(`*[_type == "testimonial" && published == true][0...3]{
      _id, name, company, role, content, rating
    }`).then((data) => { if (data?.length > 0) setTestimonials(data); }).catch(() => {});

    // FAQs
    client.fetch(`*[_type == "faqItem" && published == true] | order(order asc){
      _id, question, answer
    }`).then((data) => { if (data?.length > 0) setFaqs(data); }).catch(() => {});

    // Blog Posts
    client.fetch(`*[_type == "blogPost" && published == true][0...3]{
      _id, title, excerpt, date, category,
      image{ asset->{ url } }
    }`).then((data) => { if (data?.length > 0) setBlogPosts(data); }).catch(() => {});
  }, []);

  // Icon map for services (Sanity তে icon নেই তাই title দিয়ে match করবো)
  const iconMap: Record<string, any> = {
    'Social Media Marketing': Megaphone,
    'Performance Advertising': Target,
    'Brand Development': Palette,
    'Analytics & Reporting': BarChart3,
    'Influencer Marketing': Users,
    'Growth Strategy': TrendingUp,
  };

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
                {hero?.heading || 'Build Your Brand.'}{' '}
                <span className="text-[#d80000]">
                  {hero?.headingHighlight || 'Grow Your Influence.'}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {hero?.description || 'Rysonic Media helps businesses grow using social media marketing and performance advertising.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors flex items-center justify-center gap-2"
                >
                  {hero?.primaryButtonText || 'Get Started'} <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:border-[#d80000] hover:text-[#d80000] transition-colors"
                >
                  {hero?.secondaryButtonText || 'View Our Work'}
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={hero?.image?.asset?.url || 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-[#d80000] bg-opacity-10 p-3 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-[#d80000]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{hero?.statsNumber || '500+'}</div>
                    <div className="text-sm text-gray-600">{hero?.statsLabel || 'Happy Clients'}</div>
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
              const Icon = iconMap[service.title] || TrendingUp;
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
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See what our clients have to say</p>
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
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Insights, tips, and strategies</p>
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
