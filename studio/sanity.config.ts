import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from '../src/schemas'

export default defineConfig({
  name: 'rysonic-media',
  title: 'Rysonic Media CMS',
  projectId: 'n2kl5ru9',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
})
