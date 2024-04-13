import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutItem = ({ iconSrc, title, desc }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 custom-shadow bg-transparent rounded-md my-4 sm:mx-2 bg-gray" data-aos="fade-up">
    <div className="h-auto m-4 py-4 pl-6 pr-4 text-white">
      <div className="flex justify-center">
        {iconSrc}
      </div>
      <h2 className="text-sm sm:text-base md:text-lg font-bold mt-3 sm:mt-5">{title}</h2>
      <div className='flex justify-center items-center'>
        <ul className="text-xs sm:text-sm mt-3 sm:mt-4 list-disc text-left">
          {desc.split(', ').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

function About({ about }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='bg-custom-image bg-no-repeat mx-3 md:mx-14 px-2 md:px-11 bg-fixed py-7'>
      <div className='mb-12 mt-6 text-yellow'>
        <h2 className='text-2xl '>{about.headtitle}</h2>
        <div>
          <span className='line bg-light-gray rounded-lg inline-block'></span>
        </div>
      </div>
      <div className="flex flex-wrap my-6 sm:my-11 justify-center px-2 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-24">
        {about.items.map((item, index) => (
          <AboutItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default About;
