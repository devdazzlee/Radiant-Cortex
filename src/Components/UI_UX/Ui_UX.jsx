import React from 'react'
import './Ui_UX.css'
import LaptopImage from '../../Images/laptop.png'

const Ui_UX = () => {
  return (
    <div  className='flex ux-main-div justify-center my-12'  >
<div  className='ux-main-div1 flex items-center'  >
<img src={LaptopImage} alt="Image" />
</div>

<div    className='ux-main-div2' >
<h1   className='py-2  text-blue-500 text-2xl font-bold'>Radiant Cortex</h1>
<h1 className='py-2 themecolor md:text-4xl text-md font-bold'>To Be The Blueprint for <br /> Your Digital Identity</h1>
<p className='py-4 text-gray-500'  >
At Radiant Cortex, build the perfect team for your project whenever needed! This enables you to save time, focus on your project, and ensure successful completion.
</p>

<div  className='flex  ux-nested-card-parent' >
<div   >
<div  className='flex ux-nested-card ' >
<div>
<i  style={{"color":"#497DFF"}} class="fa-solid fa-cloud mr-2"></i>
</div>
<div>
<h1 className='font-bold  themecolor-light' >SPEEDY HIRING <br /> PROCESS</h1>
<p  className='text-sm' >Need to hire quickly? No problem! With our flexible engagement options, you can bring on new team members in as little as 48 hours. Plus, our scalable approach means you can easily adjust your team size as needed.
</p>
</div>
</div>

<div  className='flex ux-nested-card mt-2' >
<div>
<i  style={{"color":"#497DFF"}} class="fas fa-cloud-download mr-2"></i>
</div>
<div>
<h1 className='font-bold themecolor-light' >FUTURE-PROOFED  <br />TALENT</h1>
<p  className='text-sm' >We are extremely selective when it comes to choosing freelancers for our network. Each and every one of our applicants undergo a rigorous vetting process, resulting in a stunning 98% trial-to-hire success rate.</p>
</div>
</div>

</div>
<div   >
<div  className='flex ux-nested-card' >
<div>
<i  style={{"color":"#497DFF"}} class="fa-solid fa-cloud mr-2"></i>
</div>
<div>
<h1 className='font-bold themecolor-light' >ONLY THE BEST OF <br /> THE BEST</h1>
<p  className='text-sm' >We are extremely selective when it comes to choosing freelancers for our network. Each and every one of our applicants undergo a rigorous vetting process, resulting in a stunning 98% trial-to-hire success rate.
</p>
</div>
</div>

<div  className='flex ux-nested-card mt-2' >
<div>
<i  style={{"color":"#497DFF"}} class="fa-solid fa-cloud mr-2"></i>
</div>
<div>
<h1 className='font-bold themecolor-light' >EXCEPTIONAL  <br />PROFESSIONALISM</h1>
<p  className='text-sm' >Our experts are the cream of the crop - the top 5% of the global talent pool. Not only are they highly skilled, but they also embody the highest levels of integrity, professionalism, and communication.</p>
</div>
</div>

</div>
</div>



</div>



    </div>
  )
}

export default Ui_UX