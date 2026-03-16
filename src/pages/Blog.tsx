import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

const fallbackPosts = [
  { _id: '1', title: '10 Social Media Trends to Watch in 2024', slug: { current: '10-social-media-trends' }, content: 'Stay ahead of the curve with these emerging social media trends that will shape the digital marketing landscape this year.', imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'social-media', author: 'Sarah Chen', date: 'Mar 10, 2024', readTime: '5 min read', published: true },
  { _id: '2', title: 'How to Maximize ROI on Facebook Ads', slug: { current: 'maximize-roi-facebook-ads' }, content: 'Learn proven strategies to optimize your Facebook advertising campaigns and achieve better returns on your investment.', imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'advertising', author: 'Marcus Johnson', date: 'Mar 8, 2024', readTime: '7 min read', published: true },
  { _id: '3', title: 'Building a Strong Brand Identity in 2024', slug: { current: 'strong-brand-identity' }, content: 'Discover the essential elements of creating a memorable brand that connects with your target audience.', imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'branding', author: 'Emily Rodriguez', date: 'Mar 5, 2024', readTime: '6 min read', published: true },
  { _id: '4', title: 'The Complete Guide to Instagram Reels Marketing', slug: { current: 'instagram-reels-marketing' }, content: 'Unlock the power of Instagram Reels to reach new audiences and drive engagement with short-form video content.', imageUrl: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'social-media', author: 'Alex Martinez', date: 'Mar 3, 2024', readTime: '8 min read', published: true },
  { _id: '5', title: 'Data-Driven Marketing: Using Analytics to Drive Growth', slug: { current: 'data-driven-marketing' }, content: 'Transform your marketing strategy with data insights and make informed decisions that lead to sustainable growth.', imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'analytics', author: 'David Park', date: 'Feb 28, 2024', readTime: '9 min read', published: true },
  { _id: '6', title: 'Content Marketing Strategies That Actually Work', slug: { current: 'content-marketing-strategies' }, content: 'Cut through the noise with content marketing strategies proven to engage audiences and drive conversions.', imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'strategy', author: 'Lisa Chen', date: 'Feb 25, 2024', readTime: '7 min read', published: true },
  { _id: '7', title: 'Google Ads vs. Facebook Ads: Which is Right for You?', slug: { current: 'google-vs-facebook-ads' }, content: 'Compare the pros and cons of Google Ads and Facebook Ads to determine the best platform for your business goals.', imageUrl: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'advertising', author: 'Marcus Johnson', date: 'Feb 22, 2024', readTime: '6 min read', published: true },
  { _id: '8', title: 'The Psychology of Color in Branding', slug: { current: 'psychology-of-color' }, content: 'Understand how color choices influence consumer perception and behavior to create more effective branding.', imageUrl: 'https://images.pexels.com/photos/1153895/pexels-photo-1153895.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'branding', author: 'Emily Rodriguez', date: 'Feb 20, 2024', readTime: '5 min read', published: true },
  { _id: '9', title: 'LinkedIn Marketing for B2B Success', slug: { current: 'linkedin-marketing-b2b' }, content: 'Master LinkedIn marketing strategies to generate quality B2B leads and establish thought leadership.', imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'social-media', author: 'Sarah Chen', date: 'Feb 18, 2024', readTime: '8 min read', published: true },
];

const categories = ['all', 'social-media', 'advertising', 'branding', 'strategy', 'analytics'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState<any[]>(fallbackPosts);

  useEffect(() => {
    client.fetch(`*[_type == "blogPost"] | order(_createdAt desc){
      _id, title, slug, content, category, published,
      image{ asset->{ url } }
    }`).then((data) => {
      if (data && data.length > 0) setBlogPosts(data);
    }).catch(() => {});
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (post.content || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Insights, tips, and strategies to help your business thrive in the digital world
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#d80000] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post._id} className="bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-[#d80000] transition-all duration-300 hover:shadow-xl group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image?.asset?.url || post.imageUrl}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#d80000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category?.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date || 'Recent'}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime || '5 min read'}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#d80000] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author || 'Rysonic Media'}</span>
                      </div>
                      <button className="text-[#d80000] font-semibold hover:underline flex items-center gap-1">
                        Read <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter for the latest marketing insights</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d80000] focus:outline-none" />
            <button className="bg-[#d80000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b00000] transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
