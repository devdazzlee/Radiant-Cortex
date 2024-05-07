import React from 'react'
import './Why_Choose.css'
import Head_Para from '../Head_Para/Head_Para'
const Why_Choose = () => {
  return (
<div  className='wc-main-div m-auto'   >
<div>
<h1  className='banner-mini-head text-xl' >Why Choose</h1>
<h1   className='text-4xl  font-extrabold text-white py-4' >Why Choose Radiant <br /> Cortex For Your <br /> Project?</h1>
<p  className='text-white text-sm		 py-1'  >At Radiant Cortex, we believe outsourcing should be about building relationships, not just getting tasks done. That’s why we pour our hearts into crafting a seamless and enjoyable experience. Our goal is to ensure that our clients feel like an extension of our team.</p>
<p  className='text-white text-sm		 py-1'  >As development experts, we know how to create top-notch products that exceed expectations. But it’s our dedication to customer service that truly sets us apart. We are here to listen, advise and support you every step of the way.</p>
<p  className='text-white text-sm		 py-1'  >No project is too big, complex, or small for our talented and experienced team. From custom software development to ongoing maintenance and support, we’ve got you covered.</p>
<p  className='text-white text-sm		 py-1'  >Ready to see what we can do for your business? Let’s chat and see how we can collaborate to bring your ideas to life.</p>
<div  className='flex  text-white 	mt-4 justify-between' >
    <div>
           <ul>
              <li   className='mb-2' ><i  style={{"color" : "#56FFBD"}} class="fa fa-check-circle" aria-hidden="true"></i>Access to Global Talent Pool</li>
              <li   className='mb-2' ><i  style={{"color" : "#56FFBD"}} class="fa fa-check-circle" aria-hidden="true"></i> Cost Effective</li>
              <li   className='mb-2' ><i  style={{"color" : "#56FFBD"}} class="fa fa-check-circle" aria-hidden="true"></i> Lead Nurturing Scheme</li>
            </ul>

    </div>
            <div>
            <ul>
              <li   className='mb-2' ><i  style={{"color" : "#56FFBD"}} class="fa fa-check-circle" aria-hidden="true"></i> Hire on the Go</li>
              <li   className='mb-2' ><i  style={{"color" : "#56FFBD"}} class="fa fa-check-circle" aria-hidden="true"></i> Agility and flexibility</li>
              <li   className='mb-2' ><i  style={{"color" : "#56FFBD"}} class="fa fa-check-circle" aria-hidden="true"></i>Complete data security</li>
            </ul>

            </div>

           </div>


</div>
<div     className='flex width-control-why justify-center  md:ml-24 ml-0	'>
<div>
<Head_Para
color={"headpara-part1"}
head1={"YOUR SUCCESS"}
head2={"DRIVES US"}
paragraph={"We are here to support you and help you achieve your goals. That’s why we offer personalized assistance throughout the development process."}
/>



<Head_Para
color={"headpara-part2"}
head1={"GROWTH IS OUR"}
head2={"MIDDLE NAME"}
paragraph={"We are always striving to improve and optimize. Whether adding new features or finding ways to make your current software even better, we are here to help your business reach new heights."}
/>

</div>

<div  className='md:mt-12  mt-0' >
<Head_Para
color={"headpara-part2"}
head1={"WE BELIEVE IN"}
head2={"DRIVES US"}
paragraph={"We are here to support you and help you achieve your goals. That’s why we offer personalized assistance throughout the development process."}
/>
<Head_Para
color={"headpara-part2"}
head1={"YOUR SUCCESS"}
head2={"DRIVES US"}
paragraph={"We are here to support you and help you achieve your goals. That’s why we offer personalized assistance throughout the development process."}
/>


</div>


</div>


</div>
  )
}

export default Why_Choose