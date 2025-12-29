import { FaNewspaper } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const subscriptionType = defineType({
  name: 'subscription',
  title: 'Subscriptions',
  icon: FaNewspaper,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
});
