import React from 'react'
import './Head_Para.css'
const Head_Para = ({head1,head2,paragraph,color}) => {
  return (
    <div     className={`head-para-main ${color} mb-4`}  >
<h1 className='font-bold text-white '>{head1}</h1>
<h1 className='font-bold text-white'>{head2}</h1>
<p className='mt-2 text-white w-90  ' >
{paragraph}
</p>
    </div>
  )
}

export default Head_Para