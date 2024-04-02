import React from 'react'

const upperSection = ({ place, temp }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* place */}
      <div className="text-[70px]">
        {place.toUpperCase()}
      </div>
      {/* temp */}
      <div className='text-[180px] my-[-80px] mb-[-70px]'>
        {temp}&deg;C
      </div>
      {/* date */}
      <div className='text-[30px]'>
        {[year, month, day].join("-")}
      </div>
    </div>
  )
}

export default upperSection