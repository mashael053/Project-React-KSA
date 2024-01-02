import React from 'react'
import { useNavigate } from 'react-router-dom'

function DigitalEconomy() {
  const navigate = useNavigate();

  const handleDetils = ()=> {
    navigate(`/DetailsAllCard/${4}`);
  
  }
  return (
    <div>

<div className="text-center ml-7 shadow-xl w-60">
<div className="h-[15rem] ml- w-[15vw] bg-whiterounded-lg max-sm:w-60">
<img className="h-50"src='https://www.saudigazette.com.sa/uploads/images/2022/09/07/2022411.jpg'/>
<h1 className="text-black font-serif p-3">Digital Economy</h1>

<button onClick={handleDetils}
className='bg-gray-200 rounded-full p-2 hover:bg-gray-600'>More Detiles</button>
</div>
</div>


    </div>
  )
}

export default DigitalEconomy