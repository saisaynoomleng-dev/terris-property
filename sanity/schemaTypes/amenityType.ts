import { capitalize } from '@/lib/utils';
import { IoListOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const amenityType = defineType({
  name: 'amenity',
  title: 'Amenities',
  icon: IoListOutline,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'floor',
      title: 'Floor',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      floor: 'floor',
      image: 'mainImage',
    },
    prepare({ name, floor, image }) {
      const nameFormatted = name ? capitalize(name) : 'Untitled Amenity';

      return {
        title: nameFormatted,
        subtitle: floor ? `Floor: ${floor}` : '',
        media: image || IoListOutline,
      };
    },
  },
});
