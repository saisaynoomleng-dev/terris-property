import { capitalize } from '@/lib/utils';
import { IoMdImages } from 'react-icons/io';
import { defineField, defineType } from 'sanity';

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galleries',
  icon: IoMdImages,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Gallery Name',
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
    }),
    defineField({
      name: 'mainImages',
      title: 'Main Images',
      type: 'array',
      of: [{ type: 'blockImage' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImages.0.asset',
    },
    prepare({ name, image }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';

      return {
        title: nameFormatted,
        media: image || IoMdImages,
      };
    },
  },
});
