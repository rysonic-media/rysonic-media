import { Target, Heart, Zap, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

const fallbackAbout = {
  title: 'About Rysonic Media',
  story: 'Founded in 2015, Rysonic Media started with a simple mission: to help businesses harness the power of digital marketing to achieve extraordinary growth.\n\nWhat began as a small team of social media enthusiasts has grown into a full-service digital marketing agency, serving clients across various industries.\n\nToday, we combine creative excellence with data-driven strategies to deliver campaigns that not only look great but also drive real business results.',
  mission: 'To help businesses achieve extraordinary growth through strategic, data-driven digital marketing.',
  vision: 'To be the most trusted digital marketing partner for businesses worldwide.',
  founderName: 'Alex Martinez',
  founderRole: 'Founder & CEO',
};

const values = [
  { icon: Target, title: 'Results-Driven', description: 'We focus on delivering measurable outcomes that matter to your business.' },
  { icon: Heart, title: 'Client-Centric', description: 'Your success is our success. We build lasting partnerships, not just campaigns.' },
  { icon: Zap, title: 'Innovation', description: 'We stay ahead of trends and leverage cutting-edge strategies to keep you competitive.' },
  { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in everything we do, from strategy to execution.' },
];

const [team, setTeam] = useState<any[]>([
  { _id: '1', name: 'Alex Martinez', role: 'Founder & CEO', image: { asset: { url: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400' } } },
  { _id: '2', name: 'Sarah Chen', role: 'Head of Strategy', image: { asset: { url: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400' } } },
  { _id: '3', name: 'Marcus Johnson', role: 'Creative Director', image: { asset: { url: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400' } } },
  { _id: '4', name: 'Emily Rodriguez', role: 'Performance Manager', image: { asset: { url: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400' } } },
]);

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '1000+', label: 'Campaigns Launched' },
  { number: '95%', label: 'Client Retention' },
  { number: '$50M+', label: 'Revenue Generated' },
];

export default function About() {
  const [about, setAbout] = useState<any>(fallbackAbout);

  client.fetch(`*[_type == "teamMember"] | order(order asc){
  _id, name, role, image{ asset->{ url } }
}`).then((data) => { if (data?.length > 0) setTeam(data); }).catch(() => {});

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{about.title || 'About Rysonic Media'}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {about.mission || 'We\'re a team of digital marketing experts passionate about helping businesses achieve their growth goals.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {(about.story || fallbackAbout.story).split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={about.founderImage?.asset?.url || 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="bg-[#d80000] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-[#d80000]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#d80000] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
  <div key={member._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
    <img src={member.image?.asset?.url} alt={member.name} className="w-full h-64 object-cover" />
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-[#d80000] font-medium">{member.role}</p>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's create something amazing for your brand</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
            className="bg-[#d80000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b00000] transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
