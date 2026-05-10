import React from 'react'
import brown from '../assets/Images/brown.jpg'
function Card({name,des}) {
  return (
    <>
      <div className='bg-linear-to-r from-teal-400 to-yellow-200 p-1'>
              <div className='border-2 p-4 justify-items-center bg-black  '>
            <section  className='w-30'> 
                <img src={brown} alt="" />
                </section>
            <h1 className='text-amber-50'>{name}</h1>
            <p className='text-amber-50 text-center'>{des} <br /> Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

    </>
  )
}

export default Card
