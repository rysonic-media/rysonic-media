import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  image?: { asset: { url: string } };
  content: string;
  rating: number;
  result: string;
  published: boolean;
}

const fallbackTestimonials = [
    {
      _id: '1',
      name: 'Sarah Johnson',
      role: 'Founder',
      company: 'BeautyBox Co.',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Rysonic Media transformed our social media presence completely. Their strategic approach and creative content increased our engagement by 400% in just 3 months.',
      rating: 5,
      result: '400% increase in engagement',
      published: true,
    },
    {
      _id: '2',
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The ROI we achieved with Rysonic Media exceeded all expectations. Their performance advertising expertise is unmatched.',
      rating: 5,
      result: '5x ROI in 3 months',
      published: true,
    },
    {
      _id: '3',
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'FitLife App',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Working with Rysonic Media has been a game-changer for our app launch. They truly understand how to build brands that resonate with audiences.',
      rating: 5,
      result: '50K+ downloads',
      published: true,
    },
    {
      _id: '4',
      name: 'David Park',
      role: 'VP of Marketing',
      company: 'CloudSync Software',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The quality of leads we receive has improved dramatically since partnering with Rysonic Media.',
      rating: 5,
      result: '40% shorter sales cycle',
      published: true,
    },
    {
      _id: '5',
      name: 'Lisa Martinez',
      role: 'Brand Manager',
      company: 'GreenLeaf Organics',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3765144/pexels-photo-3765144.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Rysonic Media helped us build a community, not just customers. The authenticity they brought to our brand is invaluable.',
      rating: 5,
      result: '180% conversion improvement',
      published: true,
    },
    {
      _id: '6',
      name: 'James Wilson',
      role: 'Founder & CEO',
      company: 'Luxe Hotels',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The team at Rysonic Media helped us connect with a new generation of travelers while staying true to our luxury brand.',
      rating: 5,
      result: '300% booking increase',
      published: true,
    },
    {
      _id: '7',
      name: 'Amanda Taylor',
      role: 'E-commerce Director',
      company: 'Fashion Forward',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3769146/pexels-photo-3769146.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Our e-commerce revenue has tripled since working with Rysonic Media.',
      rating: 5,
      result: '3x revenue growth',
      published: true,
    },
    {
      _id: '8',
      name: 'Robert Kim',
      role: 'Co-founder',
      company: 'HealthTech Solutions',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: "Rysonic Media's data-driven approach to digital marketing is exactly what we needed.",
      rating: 5,
      result: '$2M pipeline generated',
      published: true,
    },
    {
      _id: '9',
      name: 'Jennifer Brown',
      role: 'Marketing Manager',
      company: 'EcoProducts Inc.',
      image: undefined,
      imageUrl: 'https://images.pexels.com/photos/3765144/pexels-photo-3765144.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The creativity and strategic thinking that Rysonic Media brings to every campaign is exceptional.',
      rating: 5,
      result: '250% social growth',
      published: true,
    },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>(fallbackTestimonials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "testimonial" && published == true]{
      _id, name, role, company, content, rating, result, published,
      image{ asset->{ url } }
    }`).then((data) => {
      if (data && data.length > 0) {
        setTestimonials(data);
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with Rysonic Media.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#d80000] transition-all duration-300 hover:shadow-2xl">
                  <Quote className="h-10 w-10 text-[#d80000] mb-4 opacity-50" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#d80000] text-[#d80000]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content || testimonial.text}</p>
                  <div className="bg-[#d80000] bg-opacity-10 rounded-lg p-3 mb-6">
                    <p className="text-[#d80000] font-bold text-center">{testimonial.result}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <img
                      src={testimonial.image?.asset?.url || testimonial.imageUrl || 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-[#d80000] font-semibold">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#d80000] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d80000] mb-2">95%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d80000] mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d80000] mb-2">1000+</div>
              <div className="text-gray-600">Campaigns Launched</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Success Stories</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the same results our clients are raving about
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
            className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}
