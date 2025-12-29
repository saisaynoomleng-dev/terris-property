import { capitalize, formatDateTime } from '@/lib/utils';
import { MdOutlineTour } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const tourType = defineType({
  name: 'tour',
  title: 'Tour',
  icon: MdOutlineTour,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'prferredPlan',
      title: 'Preferred Plan',
      type: 'reference',
      to: [{ type: 'floorPlan' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'scheduleDate',
      title: 'Schedule Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      preferredPlan: 'preferredPlan.name',
      date: 'scheduleDate',
    },
    prepare({ name, preferredPlan, date }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';
      const preferredPlanFormatted = preferredPlan
        ? capitalize(preferredPlan)
        : 'plan not provided';
      const dateFormatted = date
        ? formatDateTime(date)
        : 'date and time not provided';

      return {
        title: nameFormatted,
        subtitle: `Plan: ${preferredPlanFormatted} | Date: ${dateFormatted}`,
        media: MdOutlineTour,
      };
    },
  },
});
