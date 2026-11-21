import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'catalogItem',
  title: 'Catalog item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL name',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Workshop', value: 'workshops' },
          { title: 'Cake', value: 'cakes' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priceLabel',
      title: 'Price display',
      type: 'string',
      description: 'For example: From €30 or €35 per person.',
    }),
    defineField({
      name: 'details',
      title: 'Additional details',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string' })],
    }),
    defineField({
      name: 'imageUrl',
      title: 'External photo URL',
      type: 'url',
      description: 'Optional. An uploaded photo takes precedence.',
    }),
    defineField({
      name: 'isSample',
      title: 'Sample content',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
})