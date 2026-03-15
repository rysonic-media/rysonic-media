import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'rysonic-media',
  title: 'Rysonic Media',
  projectId: 'n2kl5ru9',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [],
  },
})
