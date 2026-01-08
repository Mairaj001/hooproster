import { type SchemaTypeDefinition } from 'sanity'
import { landingPageSchema } from './landingPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPageSchema],
}
