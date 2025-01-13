import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

const Portfolio = () => {

  let slides = [
    <img src={"src/img/about/1.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/2.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/3.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/4.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/5.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/6.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/7.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/8.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/9.jpg"} className='w-full h-auto' alt='Woman' />,
    <img src={"src/img/about/10.jpg"} className='w-full h-auto' alt='Woman' />
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
          <div className='flex-1 order-2 lg:order-none overflow-hidden' style={{ height: '500px', overflow: 'hidden' }}>
            <Carousel children={slides} showThumbs={false} autoPlay infiniteLoop showStatus={false}></Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


