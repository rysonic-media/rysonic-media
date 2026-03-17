export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
}
