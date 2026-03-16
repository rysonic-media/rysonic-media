export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'headingHighlight', title: 'Heading Highlight (Red Text)', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'primaryButtonText', title: 'Primary Button Text', type: 'string' },
    { name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string' },
    { name: 'statsNumber', title: 'Stats Number (e.g. 500+)', type: 'string' },
    { name: 'statsLabel', title: 'Stats Label (e.g. Happy Clients)', type: 'string' },
    { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
  ],
}
