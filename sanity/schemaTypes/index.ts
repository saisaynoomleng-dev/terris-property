import { type SchemaTypeDefinition } from 'sanity';
import { blockContentType } from '../components/blockContentType';
import { blockImageType } from '../components/blockImageType';
import { floorPlanType } from './floorPlanType';
import { unitType } from './unitType';
import { contactType } from './contactType';
import { galleryType } from './galleryType';
import { blogType } from './blogType';
import { categoryType } from './categoryType';
import { amenityType } from './amenityType';
import { neighborHoodType } from './neighborHoodType';
import { teamMemberType } from './teamMemberType';
import { termType } from './termsType';
import { applicationType } from './applicationType';
import { maintenanceType } from './maintenanceType';
import { tourType } from './tourType';
import { serviceType } from './serviceType';
import { subscriptionType } from './subscriptionType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    blockImageType,
    floorPlanType,
    unitType,
    contactType,
    galleryType,
    blogType,
    categoryType,
    amenityType,
    neighborHoodType,
    teamMemberType,
    termType,
    applicationType,
    maintenanceType,
    tourType,
    serviceType,
    subscriptionType,
  ],
};
