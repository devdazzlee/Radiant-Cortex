import React from 'react'
import './OurClient_ino.css'
import Image1 from '../../Images/Sponcerlogo-1.png'
import Image2 from '../../Images/Sponcerlogo-2.png'
import Image3 from '../../Images/Sponserlogo-3.png'
import Image4 from '../../Images/logo-4.png'
import Image5 from '../../Images/logo-5.png'
import Image6 from '../../Images/logo-6.png'




const OurClient_ino = () => {
  return (
    <div  className='OurClient_ino_container'   >
<div  className='flex OurClient_innner_container' >
<div  className='OurClient_ino_part1 xl:ml-14'  >
<h1    className='text-white text-xl my-2'   >OUR CLIENTS</h1>

<h1  className='text-white md:text-3xl text-2xl font-bold md:mr-2 mr-0'>We are honored to have worked with such valuable customers. It is through our joint effort that we have been able to produce satisfying results.
</h1>
</div>

<div  className='OurClient_ino_part2'  >
<p  className='text-white text-md md:mt-0 mt-6'  >Our clients define us as an innovative team that produces astonishing UI/UX elements, allowing for a fantastic user experience.</p>
<div    className='OurClient_ino_part2-inner  flex flex-wrap m-auto py-4' >
<div>
<img  className='py-4 ' src={Image1} alt="" />
<img  className='py-4 ' src={Image3} alt="" />
<img  className='py-4 ' src={Image5} alt="" />
</div>
<div>
<img  className='md:ml-8 ml-1 py-1 ' src={Image2} alt="" />
<img  className='md:ml-8 ml-1 py-1 ' src={Image4} alt="" />
<img  className='md:ml-8 ml-1 py-1 ' src={Image6} alt="" />
</div>

</div>


</div>
</div>

    </div>
  )
}

export default OurClient_ino