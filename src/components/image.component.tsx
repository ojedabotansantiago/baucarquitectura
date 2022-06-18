import Image from 'next/image';
import { StaticImageData } from 'next/image';

type EntryProps = {
  imagePath: StaticImageData;
};
const ImageComponent = (entryProps: EntryProps | any) => {
  console.log('entryProps', entryProps);
  debugger;
  return (
    <>
      <span className='flex items-center  mt-10'>
        <Image src={entryProps.imagePath} alt='Picture of the author' priority className='w-full aspect-video ...' />
      </span>
    </>
  );
};

export default ImageComponent;
