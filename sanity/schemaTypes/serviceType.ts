import { capitalize, formatCurrency } from '@/lib/utils';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  icon: MdOutlineCleaningServices,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
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
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'floorLevel',
      title: 'Floor Level',
      type: 'string',
      options: {
        list: [
          { value: 'level-5', title: 'Level 5' },
          { value: 'level-6', title: 'Level 6' },
          { value: 'level-7', title: 'Level 7' },
        ],
        layout: 'radio',
      },
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
      title: 'Desciption',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      floor: 'floorLevel',
      price: 'price',
      image: 'mainImage',
    },
    prepare({ name, floor, price, image }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';
      const floorFormatted = floor ? capitalize(floor) : 'Florr not provided';
      const priceFormatted = price
        ? formatCurrency(price)
        : 'Price not provdided';

      return {
        title: nameFormatted,
        subtitle: `Price: ${priceFormatted} | Floor: ${floorFormatted}`,
        media: image || MdOutlineCleaningServices,
      };
    },
  },
});
