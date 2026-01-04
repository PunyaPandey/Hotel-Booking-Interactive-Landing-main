import { BookForm, FeaturedAmenities, HeroSlider, Rooms, ScrollToTop } from '../components';


const Home = () => {

  return (
    <div>
      <ScrollToTop />

      <HeroSlider />

      <div className='container mx-auto relative'>

        <div className='bg-accent/20 mt-4 p-4 lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:-top-12 lg:z-30 lg:shadow-xl'>
          <BookForm />
        </div>

      </div>

      <FeaturedAmenities />

      {/* About Us Section */}
      <section className='py-12 bg-gray-50 text-center px-4'>
        <div className='container mx-auto max-w-[800px]'>
          <h2 className='font-primary text-[32px] mb-4'>Welcome to The GRIPA HOTEL</h2>
          <p className='text-gray-600 leading-relaxed text-lg'>
            The GRIPA HOTEL offers a serene spiritual retreat in the heart of Chitrakoot, located just steps from the sacred Ramghat.
            Experience authentic hospitality blended with modern comfort for a truly peaceful pilgrimage.
          </p>
        </div>
      </section>

      <Rooms />
    </div>
  );
};

export default Home;

