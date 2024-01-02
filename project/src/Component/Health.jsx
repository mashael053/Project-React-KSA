import React from 'react'
import { useNavigate } from 'react-router-dom'

function Health() {
  const navigate = useNavigate();

  const handleDetils = ()=> {
    navigate(`/DetailsAllCard/${2}`);
  
  }
  
  return (
    <>
<div className="text-center ml-7 shadow-xl w-60">
<div className="h-[15rem] ml- w-[15vw] rounded-lg max-sm:w-60">
<img className="h-50"src='https://m.eyeofriyadh.com/news_images/2023/11/f8141eccc665.jpg'/>
<h1 className="text-black font-serif p-3">the health</h1>
<button onClick={handleDetils}
className='bg-gray-200 rounded-full p-2 hover:bg-gray-600 cursor-[pointer] '>More Detiles</button>
</div>
</div>



    </>
  )
}

export default Health