import React from 'react'
import './Services_Cards.css'
import img1 from '../../Images/icon1.png'
import img2 from '../../Images/icon2.png'
import img3 from '../../Images/icon3.png'
import { Link } from 'react-router-dom'


const OfferCardssec = () => {
  return (
    <div>

<div className='flex flex-wrap justify-center bg-white  main-Offer-card  '>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img1} />
        <h1    className='font-bold '>Digital Strategy
</h1>
        <p>The strategies we incorporate through technology make your brand optimizable.</p>


<Link   to={'/Contact'} >

<button  className='my-12  font-bold underline'  >

Get this service now <i class="fa-solid fa-arrow-right"></i>
</button>

</Link>

      </div>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img2} />
        <h1    className='font-bold '>Design Concept

</h1>
        <p>Our design concepts have a sleek look that doesn't compromise technicalities.</p>


<Link   to={'/Contact'} >

<button  className='my-12 font-bold underline'  >

Get this service now <i class="fa-solid fa-arrow-right"></i>
</button>

</Link>

      </div>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img3} />
        <h1    className='font-bold '>Graphics Design

</h1>
        <p>Our designers visualize your ideas and transform them into art with their expertise.</p>


<Link   to={'/Contact'} >

<button  className='my-12  font-bold underline'  >

Get this service now <i class="fa-solid fa-arrow-right"></i>
</button>

</Link>

      </div>
    </div>
    </div>
  )
}

export default OfferCardssec