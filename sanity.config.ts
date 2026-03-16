import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/schemas'

export default defineConfig({
  name: 'rysonic-media',
  title: 'Rysonic Media',
  projectId: 'n2kl5ru9',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
