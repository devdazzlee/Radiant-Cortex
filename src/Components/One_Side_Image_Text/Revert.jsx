import React from 'react';
import './OneSideIT.css';

const RevertText_Image = ({ title, subtitle, paragraph, imageSource }) => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center  w-full px-2 m-auto my-16'> 
      <div className="md:w-5/12">
        <img src={imageSource} alt="" className="w-full imgServiceCardIT" />
      </div>
      <div className='md:w-5/12 flex flex-col justify-between md:px-12 mb-8 md:mb-0'>
        <h1 className='font-bold text-3xl text-center md:text-center'>{title}</h1>
        <hr style={{ border: "2px solid #F15A3B" }} className='w-36 m-auto my-2' />
        <h1 className='text-center text-xl md:text-center my-4 font-medium'>{subtitle}</h1>
        <p className="text-center md:text-left tracking-wide leading-8">{paragraph}</p>
      </div>
    </div>
  );
}

export default RevertText_Image;
