import { capitalize } from '@/lib/utils';
import { MdPhoneCallback } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
  icon: MdPhoneCallback,
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
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
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'fullName',
      email: 'email',
    },
    prepare({ name, email }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';

      return {
        title: nameFormatted,
        subtitle: `Email: ${email}`,
        media: MdPhoneCallback,
      };
    },
  },
});
