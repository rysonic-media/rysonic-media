export default {
  name: 'siteSettings',
  title: 'Site Settings (Footer)',
  type: 'document',
  fields: [
    { name: 'description', title: 'Footer Description', type: 'text' },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'facebook', title: 'Facebook URL', type: 'url' },
    { name: 'instagram', title: 'Instagram URL', type: 'url' },
    { name: 'twitter', title: 'Twitter URL', type: 'url' },
    { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
  ],
}
