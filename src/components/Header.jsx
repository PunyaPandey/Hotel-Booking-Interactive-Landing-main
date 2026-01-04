import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoWhite } from '../assets'; // SVG Logo
import { LogoDark } from '../assets'; // SVG Logo
import { contactInfo } from '../constants/data';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Header = () => {

  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    );
  });

  const navLinks = ['Home', 'Rooms', 'Restaurant', 'Spa', 'Contact'];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-4 shadow-lg' : 'bg-transparent py-6'}`}
    >

      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-4 lg:gap-y-0'>

        {/* Logo and Location */}
        <div className='flex flex-col items-center lg:items-start gap-1'>
          <Link to="/" onClick={resetRoomFilterData}>
            {
              header
                ? <LogoDark className='w-[160px]' />
                : <LogoWhite className='w-[160px]' />
            }
          </Link>

          {/* Location Text */}
          <a
            href={contactInfo.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-[11px] tracking-[1px] transition-colors hover:text-accent
              ${header ? 'text-primary/70' : 'text-white/80'}`}
          >
            <FaMapMarkerAlt className='text-accent text-xs' />
            <span>Located in Kashavgarh, Chitrakoot – Near Ramghat</span>
          </a>
        </div>

        {/* Nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
        flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
          {
            navLinks.map(link =>
              <Link to="/" className='transition hover:text-accent' key={link}>
                {link}
              </Link>
            )
          }
        </nav>

      </div>

    </header>
  );
};

export default Header;
