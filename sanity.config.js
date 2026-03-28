import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Flynt Blog',

  projectId: 'm90jbgeh',
  dataset: 'flynt-blog',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
