import React from 'react'
import './CuriousWhy.css'
import img1 from '../../Images/phone.png'


const CuriousWhy = () => {
  return (
    <div  className='my-12 flex curios-why-main justify-center items-center flex-wrap  md:px-0 px-2'  >
<div   className='curios-why-part1'  >
<div className='curios-why-main-card-1'  >
<h1 className='font-bold text-2xl' >2,500</h1>
<h1  className='font-bold'>Projects Completed</h1>
</div>
    <img  className='imgyear' src={img1} alt="" />


    <div   className='curios-why-main-card-2' >
<h1 className='font-bold text-2xl' >1,800</h1>
<h1  className='font-bold'>Worldwide Customer</h1>
</div>
    <div>

    </div>
</div>

<div  className='curios-why-part2'  >
<h1 className='text-xl my-2'  >Curious Why</h1>
<h1  className='text-4xl font-extrabold my-6' >Developers Choose <br /> Radiant Cortex?</h1>
<p  className='my-4 w-10/12	'>We are a platform that offers amazing career opportunities to everyone who shakes our hand.</p>
<ul>

<li   className='mb-2 my-4 ' ><i  style={{"color" : "#497DFF"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Vetted once, eligible for life</li>
<li   className='mb-2 my-4 ' ><i  style={{"color" : "#497DFF"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Exclusive Turing developer community</li>
<li   className='mb-2 my-4 ' ><i  style={{"color" : "#497DFF"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Income stability thanks to a 99% rematch rate</li>

</ul>



</div>
    </div>
  )
}

export default CuriousWhy