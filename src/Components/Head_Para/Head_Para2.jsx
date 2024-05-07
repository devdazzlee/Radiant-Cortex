import React from 'react'
import './Head_Para.css'
const Head_Para2 = ({head1,head2,paragraph}) => {
  return (
    <div     className={`head-para-main`}  >
<div>
<i aria-hidden="true" class="icon icon-cloud-sync"></i>
<h1 className='font-bold text-white '>{head1}</h1>
<h1 className='font-bold text-white'>{head2}</h1>
</div>
<p className='mt-2 text-white' >
{paragraph}
</p>
    </div>
  )
}

export default Head_Para2