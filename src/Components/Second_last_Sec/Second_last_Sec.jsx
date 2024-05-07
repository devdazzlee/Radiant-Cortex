import React from 'react';
import './Second_last_Sec.css';

const Second_last_Sec = () => {
    return (
        <div className='second-last-container'>
            <div className='background-overlay'></div>
            <div className='content text-center'>
                <h1    className='md:text-2xl my-4  text-md themecolor-light font-bold'  >Like what you’ve seen? Get in touch to learn more</h1>
                <h1     className='md:text-6xl  text-4xl my-4 font-extrabold themecolor'  >We’d Love to Hear from You. <br /> Let’s Talk!</h1>
                <button    type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Let's Connect</button>
            </div>
        </div>
    )
}

export default Second_last_Sec;
