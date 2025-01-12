import { Link } from 'react-router-dom';

import Carousel from "../components/Carousel";

const Home = () => {
  let slides = [
    "src/img/carousel/1.JPG",
    "src/img/carousel/2.JPG",
    "src/img/carousel/3.JPG",
    "src/img/carousel/4.JPG",
    // "src/img/carousel/1.JPG",
    // "src/img/portfolio/1.JPG",
    // "src/img/portfolio/2.JPG",
    // "src/img/portfolio/4.jpg",
    // "src/img/portfolio/7.jpg",
    // "src/img/portfolio/25.jpg",
    // "src/img/portfolio/26.jpg"
  ];
  return (
    <section className='section overflow-y-auto pt-[100px]'>
      <div className="">
        <Carousel slides={slides} />
      </div>
      <div className='container mx-auto relative pt-10 p-4'>
        <div className='flex flex-col justify-'>
          <div className='w-full pt-10 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center'>
            <h1 className='h1' style={{ fontSize: '65px' }}>
              ClickX Photography & Eternal Frames
            </h1>
            <p className='text-[20px] lg:text-[30px] font-primary mb-4 lg:mb-12'>Based on Kurunegala, Avaialble Islandwide!</p>
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
