import { Link } from 'react-router-dom';
import WomanImg from '../img/about/woman.png'

const About = () => {
  return (
    <section className='section overflow-y-auto'>
      <div className='container mx-auto relative pt-[100px]'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left'>
          <div className='flex-1 order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} className='w-full h-auto'></img>
          </div>
          <div className='flex-1 pt-36 pb-10 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About Us</h1>
            <div className='mb-12 max-w-lg'>
              <h2 className='h1' style={{ fontSize: '50px' }}>ClickX Photography</h2>
              <p>We specialize in capturing the essence of your events and products with our professional photography services. Whether it's a corporate event, a product launch, or any special occasion, we ensure to deliver high-quality images that tell your story.</p>
              <ul>
                <li>Event Photography</li>
                <li>Product Photography</li>
              </ul>
            </div>
            <div className='mb-12 max-w-lg'>
              <h2 className='h1' style={{ fontSize: '50px' }}>Eternal Frames</h2>
              <p>Our wedding photography service, Eternal Frames, is dedicated to capturing the most precious moments of your special day. We create timeless memories that you will cherish forever.</p>
              <ul>
                <li>Wedding Photography</li>
              </ul>
            </div>
            <Link to={'/portfolio'} className='btn mb-[30px]'>WHAT WE DO?</Link>
          </div>
        </div>
      </div>
    </section>);
};

export default About;
