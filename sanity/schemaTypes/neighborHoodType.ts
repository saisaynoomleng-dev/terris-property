import { capitalize } from '@/lib/utils';
import { IoHomeOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const neighborHoodType = defineType({
  name: 'neighborhood',
  title: 'Neighborhoods',
  type: 'document',
  icon: IoHomeOutline,
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
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLink',
      title: 'Social Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Neighborhood Type',
      type: 'string',
      options: {
        list: [
          { title: 'Fitness', value: 'fitness' },
          { title: 'Cafe', value: 'cafe' },
          { title: 'Grocery', value: 'grocery' },
          { title: 'Restaurant', value: 'restaurant' },
          { title: 'Park', value: 'park' },
          { title: 'Metro Station', value: 'metro-station' },
          { title: 'Shopping', value: 'shopping' },
          { title: 'Clinic', value: 'clinic' },
          { title: 'School', value: 'school' },
          { title: 'Community Center', value: 'community-center' },
        ],
      },
    }),
    defineField({
      name: 'minsWalk',
      title: 'Mins Walk',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      minsWalk: 'minsWalk',
      image: 'mainImage',
    },
    prepare({ name, type, minsWalk, image }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';
      const typeFormatted = type ? capitalize(type) : 'Type not provided';

      return {
        title: nameFormatted,
        subtitle:
          type && minsWalk
            ? `Type: ${typeFormatted} | Walk: ${minsWalk} mins`
            : '',
        media: image || IoHomeOutline,
      };
    },
  },
});
