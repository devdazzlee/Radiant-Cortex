import React from 'react'
import './One_Side_Text_image.css'
import img1 from '../../Images/home_banner_bg.png'
const Text_Image = () => {
  return (
    <div   className='flex justify-center items-center md:w-9/12 w-full px-2	 m-auto'  >
<div>
<h1   className='text-xl banner-mini-head' >Scale Your Development Team</h1>

<h1  className='font-bold md:text-6xl text-4xl mt6 text-white' >
Hire Dedicated  Developers You  Need

</h1>
<p  className='md:w-4/5 w-full	mt-12 text-white' >
Our dedicated software engineers will help you develop your idea with expertise, speed, and precision. Focusing on creating viable products with cutting-edge features, we scale up your success.
</p>
</div>

<div   className='md:block mt-12 hidden '   >
<img  className='banner-image-ti'  src={img1} alt="" />
</div>

    </div>
  )
}

export default Text_Image;