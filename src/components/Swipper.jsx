import React from 'react';
import swipe from '../assets/images/Header/swipe.png'
import '../styles/swipper.css'


const Swipper =()=>{
    return(
        <div className='swipe'>
        <div>
        <img src={swipe} alt="" className='imag'/>
        </div>
        <div className='lefty'>
        <h1>Category Overview</h1>
        <div className='grid grid-flow-row-dense grid-cols-3 md:grid-cols-2 grid-rows-3 gap-2'>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
            <div className='now'>
            <img src="https://res.cloudinary.com/mindset/image/upload/v1667204033/furniture_1_neaxdv.png" alt="" />
            <p>Mobile</p>
            </div>
        </div>
        </div>
      </div>
   
    )
}

export default Swipper