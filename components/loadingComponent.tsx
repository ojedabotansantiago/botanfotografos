import Image from 'next/image';

import loading from '../public/loading.gif';

export default function LoadingComponent(): JSX.Element {
  return (
    <div>
      <figure className='image is-128x128'>
        <Image src={loading} alt={''} width='480' height='690' />
      </figure>
    </div>
  );
}
