import WomanImage from '../img/contact/woman.png'

const Contact = () => {
  return (
    <section className='section overflow-y-auto pt-[100px]'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left '>
          <div className='lg:flex bg-[#264f58] absolute bottom-0 left-0 right-0 top72 -z-10'></div>
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact Us</h1>
            <p>Feel free to come up with your suggestions.</p>
            <p>Mobile : (+94) 76 67 68 599 : Anushka | (+94) 74 322 4118 : Ravindu</p>
            <p>Email : hello@clickxphotography.com</p>
          </div>
          <div className='lg:flex-1'>
            <img src={WomanImage}></img>
          </div>
        </div>
      </div>
    </section>);
};

export default Contact;
