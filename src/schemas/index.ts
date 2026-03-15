import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
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

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'result', title: 'Result', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'text' }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'text' }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'testimonialText', title: 'Testimonial Text', type: 'text' }),
    defineField({ name: 'testimonialAuthor', title: 'Testimonial Author', type: 'string' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'content', title: 'Content', type: 'text' }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image' }),
    defineField({ name: 'published', title: 'Show on website', type: 'boolean' }),
  ],
})

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({ name: 'location', title: 'Location (Google Maps link)', type: 'string' }),
    defineField({ name: 'hours', title: 'Business Hours', type: 'string' }),
  ],
})

export default [testimonial, portfolioItem, caseStudy, service, blogPost, contactInfo]
