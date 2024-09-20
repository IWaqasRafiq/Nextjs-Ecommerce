"use client"
import React from 'react'
import Image from 'next/image'

const CartModal = () => {

  const cartItems = false
  return (
    <div className=" w-max absolute p-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col gap-6 top-12 z-20 right-0 ">
      {cartItems ? (
        <div className=''>Cart is Empty</div>
      ) : (
        <>
        <h2 className='text-xl'>Shopping Cart</h2>
        {/* // LIST */}
        <div className='flex flex-col gap-8'>
          {/* ITEMS */}
          <div className=' flex gap-4 '>
            <Image src="https://images.pexels.com/photos/18998608/pexels-photo-18998608/free-photo-of-top-view-of-a-body-of-water-and-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={72} height={96} className='object-cover rounded-md' />
            <div className=' flex flex-col justify-between w-full '>
              {/* TOP */}
              <div className=''>
                {/* TITLE */}
                <div className=' flex items-center justify-between gap-8 '>
                  <h3 className=' font-semibold '>Product Name</h3>
                  <div className=' p-1 bg-gray-50 rounded-sm '>$48</div>
                </div>
                {/* DESC */}
                <div className=' text-sm text-gray-500  '>
                  awailable
                </div>
              </div>
              {/* BOTTOM */}
              <div className=' flex justify-between text-sm '>
                <span className='text-gray-500'>Qty. 2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
          </div>
          {/* ITEMS */}
          <div className=' flex gap-4 '>
            <Image src="https://images.pexels.com/photos/18998608/pexels-photo-18998608/free-photo-of-top-view-of-a-body-of-water-and-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={72} height={96} className='object-cover rounded-md' />
            <div className=' flex flex-col justify-between w-full '>
              {/* TOP */}
              <div className=''>
                {/* TITLE */}
                <div className=' flex items-center justify-between gap-8 '>
                  <h3 className=' font-semibold '>Product Name</h3>
                  <div className=' p-1 bg-gray-50 rounded-sm '>$48</div>
                </div>
                {/* DESC */}
                <div className=' text-sm text-gray-500  '>
                  awailable
                </div>
              </div>
              {/* BOTTOM */}
              <div className=' flex justify-between text-sm '>
                <span className='text-gray-500'>Qty. 2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/* // BOTTOM */}
        <div className=''>
          <div className="  flex justify-between items-center font-semibold ">
            <span className=''>SubTotal</span>
            <span className=''>$525</span>
          </div>
          <p className=" text-gray-500 text-sm mt-2 mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='flex justify-between text-sm'>
            <button className=' rounded-md py-3 px-4 ring-1 ring-gray-300 '>View Cart</button>
            <button className=' rounded-md py-3 px-4 bg-black text-white '>CheckOut</button>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default CartModal