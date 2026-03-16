export default {
  name: 'portfolioItem',
  title: 'Portfolio Items',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'result', title: 'Result', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'published', title: 'Published', type: 'boolean' },
  ],
}
