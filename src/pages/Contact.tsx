import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  });

  const [contactInfo, setContactInfo] = useState({
    phone: '+91 86229 49092',
    email: 'hello@rysonicmedia.com',
    address: '123 Business Street\nMarketing City, MC 12345',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed',
    location: '',
  });

  useEffect(() => {
    client.fetch(`*[_type == "contactInfo"][0]{
      phone, email, address, hours, location
    }`).then((data) => {
      if (data) setContactInfo(data);
    }).catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you! We will get back to you within 24-48 hours.');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  const services = ['Social Media Marketing', 'Performance Advertising', 'Brand Development', 'Influencer Marketing', 'SEO Services', 'Content Creation', 'Other'];
  const budgetRanges = ['Under $5,000/month', '$5,000 - $10,000/month', '$10,000 - $25,000/month', '$25,000 - $50,000/month', 'Over $50,000/month'];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to grow your business? Let's start a conversation about how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors" placeholder="Your Company" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Service Interested In</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors">
                        <option value="">Select a service</option>
                        {services.map((service) => <option key={service} value={service}>{service}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Monthly Budget</label>
                      <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors">
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Tell Us About Your Project *</label>
                    <textarea required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none transition-colors resize-none" placeholder="Tell us about your goals, challenges, and how we can help..." />
                  </div>
                  <button type="submit" className="w-full bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors flex items-center justify-center gap-2">
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d80000] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#d80000]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Office Address</div>
                      <p className="text-gray-600 whitespace-pre-line">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d80000] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#d80000]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d80000] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#d80000]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d80000] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#d80000]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                      <p className="text-gray-600 whitespace-pre-line">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#d80000] text-white p-8 rounded-2xl">
                <MessageCircle className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Prefer to Chat?</h3>
                <p className="mb-6 text-white text-opacity-90">Click the WhatsApp button in the bottom right corner to start a conversation with our team.</p>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm text-white text-opacity-90">We typically respond within 15 minutes during business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">We'd love to meet you in person</p>
          </div>
          {contactInfo.location ? (
            <iframe src={contactInfo.location} className="w-full h-96 rounded-2xl" allowFullScreen loading="lazy" />
          ) : (
            <div className="bg-gray-300 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
              <p className="text-gray-600">Add Google Maps link in CMS → Contact Info → Location</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
