export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'published', title: 'Published', type: 'boolean' },
  ],
}
