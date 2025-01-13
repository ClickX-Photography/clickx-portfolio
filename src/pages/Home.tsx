import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  let slides1 = [
    <img src={"src/img/carousel/1.JPG"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/carousel/2.JPG"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/carousel/3.JPG"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/carousel/4.JPG"} className='w-full h-auto' alt='Woman' />
  ];

  return (
    <section className='section overflow-y-auto pt-[100px]'>
      <div className='flex-1 order-2 lg:order-none overflow-hidden' style={{ height: '500px', overflow: 'hidden' }}>
        <Carousel 
          children={slides1} 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          showStatus={false}
        />
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
        </div>
      </div>
    </section>);
};

export default Home;
