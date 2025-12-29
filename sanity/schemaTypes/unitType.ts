import { capitalize, formatCurrency } from '@/lib/utils';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const unitType = defineType({
  name: 'unit',
  title: 'Unit',
  icon: MdOutlineBedroomParent,
  type: 'document',
  fields: [
    defineField({
      name: 'unitNumber',
      title: 'Unit Number',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'unitNumber',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'floorPlan',
      title: 'Floor Plan',
      type: 'reference',
      to: [{ type: 'floorPlan' }],
    }),
    defineField({
      name: 'isTaken',
      title: 'Is Taken',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      name: 'unitNumber',
      floorPlan: 'floorPlan.name',
      rent: 'floorPlan.rent',
    },
    prepare({ name, floorPlan, rent }) {
      const floorPlanFormatted = floorPlan
        ? capitalize(floorPlan)
        : 'Unknown floor plan';
      const rentFormatted = rent ? formatCurrency(rent) : 'Price not listed';

      return {
        title: name ? name : 'Room Number not provided',
        subtitle: `Floor Plan: ${floorPlanFormatted} | Rent: ${rentFormatted}`,
        media: MdOutlineBedroomParent,
      };
    },
  },
});
