import React from 'react'
import './image_Text.css'
import Image1 from '../../Images/asian-businessmen-and-businesswomen-meeting-using-W3QY5ES.jpg'
import Image2 from '../../Images/multi-ethnic-it-team-JDHACMJ.jpg'


const Image_Text = () => {
  return (
<div   className='head-1-it w-3/5 m-auto flex flex-wrap justify-center items-center my-24'     >
<div   className='xl:w-2/5  it-sec-1'   >
<div  className='it-txt-1 xl:text-xl  text-md font-medium'  >Globally recognized <br /> team augmentation <br /> services</div>
<img  className='w-96 md:h-64 h-36 bg-img-1-it'  src={Image2} alt="" />
<img  className='w-96 md:h-64 h-24 bg-img-2-it'  src={Image1} alt="" />
</div>
<div  className='xl:w-3/5	 md:px-0 px-3 	' >
<h1  className='2xl:text-2xl  text-2xl text-blue-600 font-medium'>Think, Hire, Develop</h1>
<h1  className='2xl:text-5xl text-2xl  font-bold my-4 md:block hidden ' >Improving The Code <br /> Base, Frameworks,<br /> Languages, And <br /> Databases.</h1>
<h1  className='2xl:text-5xl  font-bold my-4 md:hidden  block' >Improving The Code  Base, Frameworks,Languages, And Databases.</h1>
<p  className='w-full my-4' >At Radiant Cortex, our agile and multi-disciplinary development teams have a well-defined methodology to deliver high-quality results. Our expertise spans a wide range of developmental projects, from database design to web or mobile development.</p>
<button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2">Let's Connect</button>

</div>

</div>
  )
}

export default Image_Text