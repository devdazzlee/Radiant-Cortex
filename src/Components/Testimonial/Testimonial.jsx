import React from 'react'
import './Testimonal.css'
import team from '../../Images/team-4.jpg'
import Metaverse from '../../Images/brunette-young-woman-touching-virtual-reality-head-MGDQ6WZ.jpg'

const Testimonial = () => {
  return (
    <div   className='testimonal-main-div' >

<div  className='testimonal-main-part1' >
<h1   className='text-xl font-bold my-2' style={{"color" :"#56FFBD"}}   >Testimonial</h1>
<h1 className='text-4xl font-bold text-white mb-8' >What our client say</h1>
<p  className='text-white text-sm w-10/12	' >I made the best decision by choosing Radiant Cortex for my website development. They understand the client’s needs and go the extra mile to achieve them.</p>
<div     className='flex justify-between box-shadow-testimonal  md:w-10/12 w-full mt-4' >
<div className='flex ' >
<div>
<img className='rounded-full w-16 mr-4' src={team} alt="" />
</div>
<div>
    <h1   className='text-md'  style={{"color" :"#56FFBD"}}>Olivia Sawyer</h1>
    <h1   className='text-md text-white font-medium' >VP of Product
</h1>
</div>
</div>


<div>
<i class="fas fa-quote-right text-white fa-4x"></i>
</div>
</div>


<p  className='text-white mt-16'  >If you want to know about services or discuss your next big project, call us immediately!</p>
</div>
<div className='testimonal-main-part2' >  
    <img   className='md:w-90 w-full ' src={Metaverse} alt="" />
</div>

    </div>
  )
}

export default Testimonial