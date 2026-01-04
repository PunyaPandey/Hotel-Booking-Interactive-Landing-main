import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../constants/data';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';


const HeroSlider = () => {

  const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'
    >
      {
        sliderData.map(({ id, title, bg, btnNext }) =>
          <SwiperSlide className='h-full relative flex justify-center items-center' key={id}>

            <div className='z-20 text-white text-center px-4'>
              <div className='uppercase font-tertiary tracking-[6px] mb-5 text-sm lg:text-base'>Just Enjoy & Relax</div>
              <h1 className='font-primary text-[32px] sm:text-[40px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 drop-shadow-lg'>
                {title}
              </h1>
              <button onClick={scrollToRooms} className='btn btn-lg btn-primary mx-auto transition-transform active:scale-95'>
                {btnNext}
              </button>
            </div>

            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={bg} alt="luxury hotel room" />
            </div>

            <div className='absolute w-full h-full bg-black/60' />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
};

export default HeroSlider;

