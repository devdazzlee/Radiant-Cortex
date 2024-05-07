import React from 'react'

const Work_Card = ({img,heading,paragraph}) => {
  return (
    <div  className='text-center md:w-64 mr-4 my-4 w-full' >
<img  className='md:w-auto  w-full md:h-auto  h-80' src={img} alt="" />
<h1 className='text-lg font-bold' >{heading}</h1>
<p  className='text-md' > {paragraph}</p>
    </div>
  )
}

export default Work_Card