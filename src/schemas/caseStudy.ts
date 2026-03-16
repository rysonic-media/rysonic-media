export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    { name: 'client', title: 'Client Name', type: 'string' },
    { name: 'industry', title: 'Industry', type: 'string' },
    { name: 'challenge', title: 'Challenge', type: 'text' },
    { name: 'solution', title: 'Solution', type: 'text' },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'published', title: 'Published', type: 'boolean' },
  ],
}
