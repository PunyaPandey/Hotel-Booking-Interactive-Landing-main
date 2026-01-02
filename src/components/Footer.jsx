import { LogoWhite } from "../assets";

const Footer = () => (
  <footer className='bg-primary py-12'>

    <div className='container mx-auto text-white flex items-center gap-5 sm:justify-between flex-col sm:flex-row'>
      <a href="/" >
        <LogoWhite className="w-[160px]" />
      </a>

    </div>

  </footer>
);

export default Footer;