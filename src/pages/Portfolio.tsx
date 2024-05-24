import { Link } from 'react-router-dom';

import Carousel from "../components/Carousel";

const Portfolio = () => {

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <div className='flex flex-col lg:items-center'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi quia quo aliquid hic provident numquam qui, facere a velit nam ipsa assumenda, excepturi incidunt iusto, eligendi dolorum sit. Expedita.</p>
            <Link to={'/contact'} className='btn mb-[30px]'>CALL US NOW</Link>
          </div>

          <div>
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


