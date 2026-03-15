import { defineConfig, defineType, defineField } from 'sanity'
import { structureTool } from 'sanity/structure'

const testimonial = defineType({
  name: 'testimonial', title: 'Testimonials', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'content', title: 'Review', type: 'text' }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number' }),
    defineField({ name: 'image', title: 'Photo', type: 'image' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

const portfolioItem = defineType({
  name: 'portfolioItem', title: 'Portfolio', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'result', title: 'Result', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

const caseStudy = defineType({
  name: 'caseStudy', title: 'Case Studies', type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'text' }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'text' }),
    defineField({ name: 'results', title: 'Results', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'testimonialText', title: 'Testimonial Text', type: 'text' }),
    defineField({ name: 'testimonialAuthor', title: 'Testimonial Author', type: 'string' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

const service = defineType({
  name: 'service', title: 'Services', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

const blogPost = defineType({
  name: 'blogPost', title: 'Blog Posts', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'content', title: 'Content', type: 'text' }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

const contactInfo = defineType({
  name: 'contactInfo', title: 'Contact Info', type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({ name: 'location', title: 'Location (Google Maps link)', type: 'string' }),
    defineField({ name: 'hours', title: 'Business Hours', type: 'string' }),
  ],
})

const faqItem = defineType({
  name: 'faqItem', title: 'FAQ', type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string' }),
    defineField({ name: 'answer', title: 'Answer', type: 'text' }),
    defineField({ name: 'order', title: 'Order (1,2,3...)', type: 'number' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

const aboutPage = defineType({
  name: 'aboutPage', title: 'About Page', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Main Title', type: 'string' }),
    defineField({ name: 'story', title: 'Our Story', type: 'text' }),
    defineField({ name: 'mission', title: 'Mission Statement', type: 'text' }),
    defineField({ name: 'vision', title: 'Vision', type: 'text' }),
    defineField({ name: 'founderName', title: 'Founder Name', type: 'string' }),
    defineField({ name: 'founderRole', title: 'Founder Role', type: 'string' }),
    defineField({ name: 'founderImage', title: 'Founder Photo', type: 'image' }),
  ],
})

const homePage = defineType({
  name: 'homePage', title: 'Home Page', type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text' }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
    defineField({ name: 'stat1', title: 'Stat 1 (e.g. 500+ Happy Clients)', type: 'string' }),
    defineField({ name: 'stat2', title: 'Stat 2', type: 'string' }),
    defineField({ name: 'stat3', title: 'Stat 3', type: 'string' }),
  ],
})

export default defineConfig({
  name: 'rysonic-media',
  title: 'Rysonic Media CMS',
  projectId: 'n2kl5ru9',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [testimonial, portfolioItem, caseStudy, service, blogPost, contactInfo, faqItem, aboutPage, homePage],
  },
})
