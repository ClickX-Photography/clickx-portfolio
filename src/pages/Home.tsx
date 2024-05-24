import { Link } from 'react-router-dom';

import Carousel from "../components/Carousel";

const Home = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <section className='section overflow-y-auto pt-[100px]'>
      <div className="">
        <Carousel slides={slides} />
      </div>
      <div className='container mx-auto relative pt-10 p-4'>
        <div className='flex flex-col justify-'>
          <div className='w-full pt-10 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center'>
            <h1 className='h1'>
              ClickX Photography & Eternal Frames
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Based on Kurunegala, Avaialble Islandwide!</p>
            <Link to={'/contact'} className='btn mb-[30px]'>CALL US NOW!</Link>
          </div>
          {/* <div className='flex justify-end max-h-96 lg:max-h-96'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <img className='max-h-[800px]' src={HomeImg} alt='' />
            </div>
          </div> */}
        </div>
      </div>
    </section>);
};

export default Home;
