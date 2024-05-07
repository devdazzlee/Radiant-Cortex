import React from 'react'
import './Carrers.css'
const Carrers = () => {
  return (
    <div    className='flex carrers-sec '  >
<div  className='carrers-sec-part1' >
<h1   className=' text-orange-600 text-xl my-2'   >CAREERS</h1>
<h1  className='text-blue-950 md:text-4xl text-2xl font-extrabold'  >Join our team to craft the finest digital solutions.</h1>
</div>
<div  className='carrers-sec-part2' >
   <p  className='text-black text-md md:mt-0 mt-6'  >We are a team of visionaries that aim to take brand identity creation to the next level.</p> 
   <button type="button" class="my-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2">See More Options</button>

</div>


    </div>
  )
}

export default Carrers