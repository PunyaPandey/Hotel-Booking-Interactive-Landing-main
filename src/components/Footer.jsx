import { LogoWhite } from "../assets";
import { contactInfo, footerTravelTip } from "../constants/data";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';

const Footer = () => (
  <footer className='bg-primary py-12'>
    <div className='container mx-auto text-white'>

      {/* Top Section: Logo and Find Us */}
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8'>

        {/* Logo */}
        <a href="/">
          <LogoWhite className="w-[160px]" />
        </a>

        {/* Find Us Section */}
        <div className='flex flex-col gap-3'>
          <h4 className='font-primary text-xl mb-2'>Find Us</h4>
          <a
            href={contactInfo.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-start gap-3 hover:text-accent transition-colors'
          >
            <FaMapMarkerAlt className='text-accent text-xl mt-1 flex-shrink-0' />
            <span className='text-sm max-w-[300px]'>{contactInfo.address}</span>
          </a>
          <a href={`tel:${contactInfo.phone}`} className='flex items-center gap-3 hover:text-accent transition-colors'>
            <FaPhone className='text-accent text-xl flex-shrink-0' />
            <span className='text-sm'>{contactInfo.phone}</span>
          </a>
        </div>

        {/* Tour Desk & Tips */}
        <div className='flex flex-col gap-3'>
          <h4 className='font-primary text-xl mb-2'>Tour Desk</h4>
          <div className='flex items-start gap-3'>
            <FaInfoCircle className='text-accent text-xl mt-1 flex-shrink-0' />
            <p className='text-sm text-white/80 max-w-[250px]'>{contactInfo.tourDesk}</p>
          </div>
          <p className='text-xs text-white/60 mt-2 italic border-t border-white/10 pt-2'>
            Travel Tip: {footerTravelTip}
          </p>
        </div>

        {/* Book via WhatsApp or Call */}
        <div className='flex flex-col gap-3 w-full lg:w-auto'>
          <h4 className='font-primary text-xl mb-2'>Book Now</h4>
          <a
            href={`https://wa.me/${contactInfo.tourServicesPhone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors w-full lg:w-auto'
          >
            <FaWhatsapp className='text-xl' />
            <span className='text-sm font-semibold'>Book via WhatsApp</span>
          </a>
          <a
            href={`tel:${contactInfo.tourServicesPhone}`}
            className='flex items-center justify-center gap-3 bg-accent hover:bg-accent/80 px-6 py-3 rounded-lg transition-colors w-full lg:w-auto'
          >
            <FaPhone className='text-lg' />
            <span className='text-sm font-semibold'>Call to Book</span>
          </a>
        </div>

      </div>

      {/* Bottom Section: Copyright */}
      <div className='border-t border-white/20 pt-6 text-center text-sm text-white/70'>
        © {new Date().getFullYear()} The GRIPA HOTEL. All rights reserved.
      </div>

    </div>
  </footer>
);

export default Footer;