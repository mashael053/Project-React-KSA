import React from 'react'
import { useNavigate } from 'react-router-dom';

function Neom() {
  const navigate = useNavigate();

  const handleDetils = ()=> {
    navigate(`/DetailsAllCard/${6}`);
  
  }
  
  return (
    <div>



<div className="text-center ml-7 shadow-xl w-60">
<div className="h-[15rem] ml- w-[15vw] rounded-lg max-sm:w-60">
<img className="h-50"src='https://m.eyeofriyadh.com/directory/images/2018/10/1abe78e1b8d63.png
'/>
<h1 className="text-black font-serif p-3">Neom</h1>
<button onClick={handleDetils}
className='bg-gray-200 rounded-full p-2 hover:bg-gray-600 cursor-[pointer] '>More Detiles</button>
</div>
</div>

    </div>
  )
}

export default Neom