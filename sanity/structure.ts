import { CiTextAlignCenter } from 'react-icons/ci';
import { FaBookOpen, FaNewspaper, FaUserTie, FaWpforms } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';
import { IoMdImage } from 'react-icons/io';
import { IoHomeOutline, IoListOutline } from 'react-icons/io5';
import {
  MdOutlineBedroomChild,
  MdOutlineBedroomParent,
  MdOutlineCleaningServices,
  MdOutlineTour,
  MdPhoneCallback,
} from 'react-icons/md';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Terris Property')
    .items([
      S.divider().title('Content'),
      S.documentTypeListItem('floorPlan')
        .title('Floor Plans')
        .icon(MdOutlineBedroomChild),
      S.documentTypeListItem('unit')
        .title('Units')
        .icon(MdOutlineBedroomParent),
      S.documentTypeListItem('gallery').title('Galleries').icon(IoMdImage),
      S.documentTypeListItem('blog').title('Blogs').icon(FaBookOpen),
      S.documentTypeListItem('amenity').title('Amenities').icon(IoListOutline),
      S.documentTypeListItem('neighborhood')
        .title('Neighborhoods')
        .icon(IoHomeOutline),
      S.documentTypeListItem('teamMember')
        .title('Team Members')
        .icon(FaUserTie),
      S.documentTypeListItem('term').title('Terms').icon(CiTextAlignCenter),

      S.divider().title('Marketing'),
      S.documentTypeListItem('contact').title('Contacts').icon(MdPhoneCallback),
      S.documentTypeListItem('tour')
        .title('Scheduled Tours')
        .icon(MdOutlineTour),
      S.documentTypeListItem('subscription')
        .title('Subscription List')
        .icon(FaNewspaper),

      S.divider().title('Products'),
      S.documentTypeListItem('service')
        .title('Services')
        .icon(MdOutlineCleaningServices),

      S.divider().title('Operations'),
      S.documentTypeListItem('maintenanceRequest')
        .title('Maintenance Requests')
        .icon(GiGears),
      S.documentTypeListItem('application').title('Applicants').icon(FaWpforms),
    ]);
