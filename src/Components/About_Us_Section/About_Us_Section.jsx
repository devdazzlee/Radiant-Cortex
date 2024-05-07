import React from 'react';
import img1 from '../../Images/coworkers-working-on-project-together-in-office-VDMBKNY.jpg'

const RevertText_Image2 = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center md:w-9/12 w-full px-2 m-auto my-16'> 
      <div className="md:w-5/12">
        <img src={img1} alt="" className="w-full imgServiceCardIT" />
      </div>
      <div className='md:w-5/12 flex flex-col justify-between md:px-12 mb-8 md:mb-0'>
        <h1 className='text-center text-xl md:text-center my-4 font-medium'>A Brand You Can Trust</h1>
        <h1 className='font-bold text-3xl text-center md:text-center'>Welcome to Radint Cortex</h1>
        <p className="text-center md:text-left tracking-wide leading-8">Radint Cortex has helped some of the biggest businesses in the industry. Our services are state-of-the-art, which means working with us boosts your business to new levels.</p>


      </div>
    </div>
  );
}

export default RevertText_Image2;
