import { capitalize } from '@/lib/utils';
import { GiGears } from 'react-icons/gi';
import { defineField, defineType } from 'sanity';

export const maintenanceType = defineType({
  name: 'maintenanceRequest',
  title: 'Maintenance Requests',
  icon: GiGears,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'reference',
      to: [{ type: 'unit' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Maintenance Type',
      type: 'string',
      options: {
        list: [
          { value: 'plumbing', title: 'Plumbing' },
          { value: 'electrical', title: 'Electrical' },
          { value: 'hvac', title: 'Heating & Cooling' },
          { value: 'appliances', title: 'Appliances' },
          { value: 'structural', title: 'Structural' },
          { value: 'pest-control', title: 'Pest Control' },
          { value: 'water', title: 'Water' },
          { value: 'safety', title: 'Safety' },
          { value: 'other', title: 'Other' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      unit: 'unit.name',
      type: 'type',
    },
    prepare({ name, unit, type }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';
      const unitFormatted = unit ? capitalize(unit) : 'Unit not provided';
      const typeFormatted = type ? capitalize(type) : 'Type not Provided';

      return {
        title: nameFormatted,
        subtitle: `Unit: ${unitFormatted} | Type: ${typeFormatted}`,
        media: GiGears,
      };
    },
  },
});
