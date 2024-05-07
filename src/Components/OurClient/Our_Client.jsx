import React from 'react';
import './Our_Client.css';

const Our_Client = () => {
    return (
        <div className='our-client-parent '>
            {/* <div className='background-image'></div> */}
            <div   className='content2 flex   flex-col items-center '>
            <h1 style={{"color":"#34FFBD"}}  className='my-4  font-bold text-xl' >Our Client</h1>
                <h1 className='md:text-5xl text-2xl font-bold my-2' >We work with an  extensive <br /> client</h1>
                <p   className='text-sm md:w-3/6 w-full	my-2' >Through solutions, we have established relations around trust. Our clientele is winding and extending. We hope to wrap you in our trust too.Complex products excite us! Our team integrate value-added solutions to enhance applications or any software projects that need further improvement. Get in touch with us to learn more how we can bring value to your project!</p>
                <button type="button" className= " w-36 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">Let's Connect</button>

            </div>
        </div>
    );
}

export default Our_Client;
