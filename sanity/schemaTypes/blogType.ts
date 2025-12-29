import { capitalize, formatDate } from '@/lib/utils';
import { FaBookOpen } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const blogType = defineType({
  name: 'blog',
  title: 'Blogs',
  icon: FaBookOpen,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: (rule) => rule.required().min(5),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
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
      title: 'title',
      category: 'category.name',
      publishedAt: 'publishedAt',
      image: 'mainImage',
    },
    prepare({ title, category, publishedAt, image }) {
      const dateFormatted = publishedAt
        ? formatDate(publishedAt)
        : 'No Published Date';
      const categoryFormatted = category ? capitalize(category) : 'No category';

      return {
        title: title ? title : 'No title',
        subtitle: `Category: ${categoryFormatted} | Published On: ${dateFormatted}`,
        media: image || FaBookOpen,
      };
    },
  },
});
