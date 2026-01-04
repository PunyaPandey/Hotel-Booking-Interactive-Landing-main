import React from 'react';
import { FaWifi, FaSwimmingPool, FaUtensils } from 'react-icons/fa';

const FeaturedAmenities = () => {
    const amenities = [
        {
            name: 'Free High-Speed Wi-Fi',
            icon: <FaWifi />,
            description: 'Stay connected with ultra-fast internet throughout the hotel.',
        },
        {
            name: 'Infinity Pool',
            icon: <FaSwimmingPool />,
            description: 'Relax in our stunning infinity pool with panoramic views.',
        },
        {
            name: 'Fine Dining',
            icon: <FaUtensils />,
            description: 'Experience gourmet cuisine prepared by world-class chefs.',
        },
    ];

    return (
        <section className='py-24 bg-white'>
            <div className='container mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='font-primary text-[45px] mb-4'>Featured Amenities</h2>
                    <p className='font-tertiary uppercase text-[15px] tracking-[6px] text-accent'>
                        Exclusively for The GRIPA HOTEL
                    </p>
                </div>

                {/* grid layout */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 px-4'>
                    {amenities.map((item, index) => (
                        <div key={index} className='flex flex-col items-center text-center group cursor-default'>
                            <div className='text-6xl text-accent mb-6 transition-transform duration-300 group-hover:scale-110'>
                                {item.icon}
                            </div>
                            <h3 className='h3 mb-3'>{item.name}</h3>
                            <p className='text-gray-600 max-w-[300px]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedAmenities;
