import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cakeInformation',
  title: 'Taartinformatie',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Titel van de sectie', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'customCakes',
      title: 'Taarten op maat',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titel', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'subtitle', title: 'Ondertitel', type: 'string' }),
        defineField({ name: 'paragraphs', title: 'Tekst', type: 'array', of: [{ type: 'text', rows: 3 }] }),
      ],
    }),
    defineField({
      name: 'fillings',
      title: 'Smaken van vullingen',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titel', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'subtitle', title: 'Ondertitel', type: 'string' }),
        defineField({ name: 'items', title: 'Vullingen en meerprijzen', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'ordering',
      title: 'Prijzen, bezorgen en bestellen',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Titel', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'subtitle', title: 'Ondertitel', type: 'string' }),
        defineField({ name: 'pricingTitle', title: 'Kop prijsindicatie', type: 'string' }),
        defineField({ name: 'pricingItems', title: 'Prijzen', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'deliveryTitle', title: 'Kop bezorgen', type: 'string' }),
        defineField({ name: 'deliveryItems', title: 'Bezorginformatie', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'orderTitle', title: 'Kop bestellen en betalen', type: 'string' }),
        defineField({ name: 'orderText', title: 'Bestel- en betaalinformatie', type: 'text', rows: 4 }),
        defineField({ name: 'contactBefore', title: 'Tekst voor de contactlink', type: 'string' }),
        defineField({ name: 'contactLink', title: 'Tekst van de contactlink', type: 'string' }),
        defineField({ name: 'contactAfter', title: 'Tekst na de contactlink', type: 'string' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Taartinformatie' }) },
})