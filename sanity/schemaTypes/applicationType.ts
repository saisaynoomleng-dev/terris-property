import { capitalize } from '@/lib/utils';
import { FaWpforms } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const applicationType = defineType({
  name: 'application',
  title: 'Applications',
  icon: FaWpforms,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Applicant Name',
      type: 'string',
      validation: (rule) => rule.required().min(10),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'preferredPlan',
      title: 'Preffered Plan',
      type: 'reference',
      to: [{ type: 'floorPlan' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'moveIn',
      title: 'Move In Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentInfo',
      title: 'Employment Info',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      preferredPlan: 'preferredPlan',
    },
    prepare({ name, preferredPlan }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';
      const planFormatted = preferredPlan
        ? capitalize(preferredPlan)
        : 'Plan not provided';

      return {
        title: nameFormatted,
        subtitle: `Preferred Plan: ${planFormatted}`,
        media: FaWpforms,
      };
    },
  },
});
