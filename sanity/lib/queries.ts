import { defineQuery } from 'next-sanity';

export const ALL_FLOOR_PLANS_QUERY = defineQuery(`*[_type == 'floorPlan'
 && defined(slug.current)]{
  name,
  slug,
  subtitle,
  'availableRooms': count(*[_type == 'unit' &&
                           references(^._id)] ),
  bath,
  bed,
  sqFt,
  rent,
  mainImage{
    alt,
    asset->{url}
  },
 }`);

export const FLOOR_PLAN_QUERY = defineQuery(`
    *[_type == 'floorPlan'
 && slug.current == $slug][0]{
  name,
  slug,
  subtitle,
  bath,
  bed,
  sqFt,
  rent,
  mainImage{
    alt,
    asset->{url}
  },
  desc,
 }`);

export const ALL_UNITS_QUERY = defineQuery(`*[_type == 'unit' &&
 defined(slug.current)]{
  unitNumber,
  slug,
  floorPlan->{
    name,
    rent,
    sqFt,
    bed,
    bath
  },
  'available': isTaken != true
 }`);

export const ALL_GALLERY_QUERY = defineQuery(`*[_type == 'gallery'
 && defined(slug.current)]{
  name,
  slug,
  mainImages[]{
    alt,
    asset->{url}
  }
 }`);

export const ALL_BLOGS_QUERY = defineQuery(`*[_type == 'blog'
 && defined(slug.current)]{
  title,
  slug,
  category->{
    name
  },
  publishedAt,
  mainImage{
    asset->{url},
    alt
  }
 }`);

export const BLOG_QUERY = defineQuery(`*[_type == 'blog'
 && slug.current == $slug][0]{
  title,
  slug,
  category->{
    name
  },
  publishedAt,
  mainImage{
    asset->{url},
    alt
  },
  desc
 }`);

export const ALL_AMENITIES_QUERY = defineQuery(`*[_type == 'amenity'
 && defined(slug.current)]{
  name,
  slug,
  floor,
  subtitle,
  mainImage{
    asset->{url},
    alt
  },
 }`);

export const AMENITY_QUERY = defineQuery(`
    *[_type == 'amenity'
 && slug.current == $slug][0]{
  name,
  slug,
  floor,
  subtitle,
  mainImage{
    asset->{url},
    alt
  },
  desc
 }`);

export const ALL_NEIGHBORHOOD_QUERY = defineQuery(`*[_type == 'neighborhood'
 && defined(slug.current)]{
  name,
  slug,
  socialLink,
  mainImage{
    alt,
    asset->{url}
  },
  type,
  minsWalk
 }`);

export const ALL_TEAM_MEMBERS_QUERY = defineQuery(`*[_type == 'teamMember'
 && defined(slug.current)]{
  name,
  slug,
  role,
  desc,
  socialLink
 }`);

export const ALL_SERVICES_QUERY = defineQuery(`*[_type == 'service'
 && defined(slug.current)]{
  name,
  slug,
  price,
  floorLevel,
  mainImage{
    alt,
    asset->{url}
  },
 }`);

export const SERVICE_QUERY = defineQuery(`*[_type == 'service'
 && slug.current == $slug][0]{
  name,
  slug,
  price,
  floorLevel,
  mainImage{
    alt,
    asset->{url}
  },
 }`);
