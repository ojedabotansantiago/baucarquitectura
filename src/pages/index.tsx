import type { NextPage } from 'next';
import ImageComponent from '../components/image.component';
import baucarquitecuraMain from '../public/images/baucarquitecuraMain.jpeg';

const Home: NextPage = () => {
  const propsMailImage = {
    imagePath: baucarquitecuraMain,
  };
  return (
    <div className='grid justify-items-center ...'>
      {propsMailImage && <ImageComponent {...propsMailImage}></ImageComponent>}
      <strong className='text-white font-semibold mt-5'>Under Construction</strong>

      <span className='text-white font-semibold mt-5'>info@baucarquitecura.com</span>
      <span className='text-white font-semibold mt-5'>C/Córdoba 6, planta 5, 505 Málaga</span>
    </div>
  );
};

export default Home;
