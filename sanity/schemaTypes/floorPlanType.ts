import { capitalize, formatCurrency } from '@/lib/utils';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const floorPlanType = defineType({
  name: 'floorPlan',
  title: 'Floor Plans',
  icon: MdOutlineBedroomChild,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().min(5),
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rent',
      title: 'Monthly Rent',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bed',
      title: 'Bed',
      type: 'number',
    }),
    defineField({
      name: 'bath',
      title: 'Bath',
      type: 'number',
    }),
    defineField({
      name: 'sqFt',
      title: 'Square Feet',
      type: 'string',
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
    defineField({
      name: 'availableRooms',
      title: 'Available Rooms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'unit' }] }],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      rent: 'rent',
    },
    prepare({ name, image, rent }) {
      const nameFormatted = name ? capitalize(name) : 'name not provided';
      const rentFormatted = rent ? formatCurrency(rent) : 0;

      return {
        title: nameFormatted,
        subtitle: `Monthly Rent: ${rentFormatted}`,
        media: image || MdOutlineBedroomChild,
      };
    },
  },
});
