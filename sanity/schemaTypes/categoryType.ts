import { MdCategory } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: MdCategory,
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
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
  ],
});
