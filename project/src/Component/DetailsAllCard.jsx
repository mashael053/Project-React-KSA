import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Info from '../Info'
function DetailsAllCard() {
    const { DeatilsId } = useParams();
    console.log(DeatilsId);


  return (

    <>


{Info.filter((item) => item.id === DeatilsId).map((item) => (
  <div className='flex flex-col m-9  'key={item.id}>
    <h1 className='font-bold  text-2xl font-sans max-sm:text-center'>{item.title}</h1>
    <div className=' left-80 top-20 ml-1 p-6 font-sans max-sm:sm' >{item.summary}</div>
    <img className="w-96 mt-7 rounded-2xl shadow-2xl" src={item.image} alt="Image" />
  </div>
))}


    </>
  )
}

export default DetailsAllCard