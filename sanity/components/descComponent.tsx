import Image from 'next/image';
import { urlFor } from '../lib/image';
import { PortableTextComponents } from 'next-sanity';

export const descComponent: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          src={urlFor(props.value).format('webp').width(600).height(400).url()}
          width={600}
          height={400}
          alt={props?.value?.alt || ''}
          priority
          loading="eager"
        />
      ) : null,
  },
};
