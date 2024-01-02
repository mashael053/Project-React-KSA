import React from 'react'
import { useNavigate } from 'react-router-dom'

function Energy() {
  const navigate = useNavigate();

  const handleDetils = ()=> {
    navigate(`/DetailsAllCard/${5}`);
  
  }
  
  return (
    <div>



<div className="text-center ml-7 shadow-xl  w-60">
<div className="h-[15rem] ml- w-[15vw] rounded-lg max-sm:w-60">
<img className="h-50"src='https://saudigazette.com.sa/uploads/images/2021/01/26/1732837.jpeg'/>
<h1 className="text-black font-serif p-3">Ministry Energy </h1>
<button onClick={handleDetils}
className='bg-gray-200 rounded-full p-2 hover:bg-gray-600 cursor-[pointer] '>More Detiles</button>
</div>
</div>


    </div>
  )
}

export default Energy