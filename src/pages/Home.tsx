import { Link } from 'react-router-dom';

import Carousel from "../components/Carousel";

const Home = () => {
  let slides = [
    "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/361634994_661288502708590_6591982055345602154_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGajRzmfTmJ_v8hmGSrkUf_DiUK9t-AOO8OJQr234A470S05p7PMioRckfPge-MieXI9jnKVyAmAIzVl6ognUIA&_nc_ohc=bHXsxzTuotUQ7kNvgFzDN1t&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYDdmjR-oqCxVIOnxRt4dIGAblP779IxRcTUjrD5HHNflg&oe=66567461",
    "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/370349211_685613286942778_6847309217241203188_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFJrvyrkRZxO4za38Nf6-8TAz1U595EYmEDPVTn3kRiYa63_O1EroPgzKm9v4m5T7XplGOtXZI065hSfTi3dyqh&_nc_ohc=Dl3jV8LVQrQQ7kNvgF1b6my&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYAQEDvYj7fqRBPfj2LXDV7_0Pje-GbvHRNqExCE7pFkMw&oe=665693CF",
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
