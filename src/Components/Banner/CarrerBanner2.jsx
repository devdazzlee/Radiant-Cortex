import React from 'react'
import './ContactBanner.css'
import { Link } from 'react-router-dom'
const CareerBanner2 = () => {
  return (
<div  className='carrer-banner2  text-center'  >
<div className='carrer-banner2-inner'  >
<h1  className='text-white md:text-2xl text-xl my-2' >CAREER</h1>
<h1  className='text-white md:text-6xl text-4xl  my-4 font-extrabold' >With us, you are expected to execute relentlessly and fail spectacularly.</h1>
<h1      className='tracking-widest text-white text-lg  w-full	text-center' >Every day, we greet a world of opportunities, disruptive ideas, and technologies with renewed excitement.</h1>
<h1      className='tracking-widest text-white text-lg  w-full	text-center' >Six core values guide every decision we make as individuals and as teams.</h1>

<Link to={'/Contact'} >
<button type="button" class=" bg-white text-black font-bold  text-sm px-12 py-2.5 text-center me-2 mb-2 mt-4">Apply Now</button>

</Link>

</div>
</div>
  )
}

export default CareerBanner2