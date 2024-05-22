import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <div className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi quia quo aliquid hic provident numquam qui, facere a velit nam ipsa assumenda, excepturi incidunt iusto, eligendi dolorum sit. Expedita.</p>
            <Link to={'/contact'} className='btn mb-[30px]'>CALL US NOW</Link>
            <div>image</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
