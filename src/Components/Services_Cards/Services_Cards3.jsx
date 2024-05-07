import React from 'react'
import './Services_Cards.css'
import img1 from '../../Images/icon-7.png'
import { Link } from 'react-router-dom'


const OfferCardssec3 = () => {
  return (
    <div>

<div className='flex flex-wrap justify-evenly bg-white  main-Offer-card  '>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img1} />
        <h1    className='font-bold '>App Designing

</h1>
        <p>Our app design services offer custom solutions for businesses.</p>


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

export default OfferCardssec3