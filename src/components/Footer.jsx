import { LogoWhite } from "../assets";
import { contactInfo } from "../constants/data";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

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
        </div>

        {/* Contact Section */}
        <div className='flex flex-col gap-3'>
          <h4 className='font-primary text-xl mb-2'>Contact</h4>
          <a href={`tel:${contactInfo.phone}`} className='flex items-center gap-3 hover:text-accent transition-colors'>
            <FaPhone className='text-accent' />
            <span className='text-sm'>{contactInfo.phone}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className='flex items-center gap-3 hover:text-accent transition-colors'>
            <FaEnvelope className='text-accent' />
            <span className='text-sm'>{contactInfo.email}</span>
          </a>
        </div>

        {/* Book via WhatsApp or Call */}
        <div className='flex flex-col gap-3'>
          <h4 className='font-primary text-xl mb-2'>Book Now</h4>
          <a
            href={`https://wa.me/${contactInfo.tourServicesPhone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-3 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg transition-colors'
          >
            <FaWhatsapp className='text-xl' />
            <span className='text-sm font-semibold'>Book via WhatsApp</span>
          </a>
          <a
            href={`tel:${contactInfo.tourServicesPhone}`}
            className='flex items-center gap-3 bg-accent hover:bg-accent/80 px-4 py-3 rounded-lg transition-colors text-center justify-center'
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