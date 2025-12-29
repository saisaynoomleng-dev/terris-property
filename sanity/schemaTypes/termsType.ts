import { capitalize } from '@/lib/utils';
import { CiTextAlignCenter } from 'react-icons/ci';
import { defineField, defineType } from 'sanity';

export const termType = defineType({
  name: 'term',
  title: 'Terms',
  type: 'document',
  icon: CiTextAlignCenter,
  fields: [
    defineField({
      name: 'name',
      title: 'Terms Name',
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
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      const titleFormatted = title ? capitalize(title) : 'Untitled Term';

      return {
        title: titleFormatted,
        media: CiTextAlignCenter,
      };
    },
  },
});
