import Socials from './Socials';
import Logo from '../img/header/logo_1.png'
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='fixed w-screen p-4 px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] flex items-center bg-white'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
                {/* Logo */}
                <Link to={'/'}>
                    <img className="max-w-[200px]" src={Logo} alt=''></img>
                </Link>
                <nav className='hidden xl:flex gap-12'>
                    <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
                    <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
                    <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
                    <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
                </nav>
            </div>
            <Socials></Socials>
            <MobileNav></MobileNav>
        </header>
    );
};

export default Header;
