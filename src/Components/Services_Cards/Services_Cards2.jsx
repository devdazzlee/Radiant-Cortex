import React from 'react'
import './Services_Cards.css'
import img1 from '../../Images/icon4.png'
import img2 from '../../Images/icon5.png'
import img3 from '../../Images/icon6.png'
import { Link } from 'react-router-dom'


const OfferCardssec2 = () => {
  return (
    <div>

<div className='flex flex-wrap justify-center bg-white  main-Offer-card  '>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img1} />
        <h1    className='font-bold '>Website Design

</h1>
        <p>We aim to deliver spectacular UI & UX while creating a website professionally.</p>


<Link   to={'/Contact'} >

<button  className='my-12 font-bold underline'  >

Get this service now <i class="fa-solid fa-arrow-right"></i>
</button>

</Link>

      </div>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img2} />
        <h1    className='font-bold '>E-Commerce

</h1>
        <p>We create, optimized e-commerce websites for the best online shopping experience.</p>


<Link   to={'/Contact'} >

<button  className='my-12 font-bold underline'  >

Get this service now <i class="fa-solid fa-arrow-right"></i>
</button>

</Link>

      </div>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img3} />
        <h1    className='font-bold '>Video Animations

</h1>
        <p>Every individual frame is created to deliver perfection, creating eye-catching videos.</p>


<Link   to={'/Contact'} >

<button  className='my-12 font-bold underline'  >

Get this service now <i class="fa-solid fa-arrow-right"></i>
</button>

</Link>

      </div>
    </div>
    </div>
  )
}

export default OfferCardssec2