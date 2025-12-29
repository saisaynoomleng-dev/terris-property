import { capitalize } from '@/lib/utils';
import { FaUserTie } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Members',
  icon: FaUserTie,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Member Name',
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
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLink',
      title: 'Social Link',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      image: 'mainImage',
    },
    prepare({ name, role, image }) {
      const nameFormatted = name ? capitalize(name) : 'Name not provided';
      const roleFrmatted = role ? capitalize(role) : 'Role not provided';

      return {
        title: nameFormatted,
        subtitle: `Role: ${roleFrmatted}`,
        media: image || FaUserTie,
      };
    },
  },
});
