import React from 'react';

function Footer({prop1}) {
  return (
    <div className='mx-6 sm:mx-24'>

      <div className='text-white mt-5 pb-11 sm:flex justify-between md:px-7 xl:px-44 text-xs sm:text-lg '>
        <h6>{prop1}</h6>
        <h6>&#169;Mahtab Test Portfolio 2023</h6>
      </div>
    </div>
  );
}

export default Footer;
//checking for adding
