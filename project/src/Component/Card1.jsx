import React from 'react'
import { useNavigate } from 'react-router-dom'


function Card1() {
const navigate = useNavigate();

const handleDetils = ()=> {
  navigate(`/DetailsAllCard/${1}`);

}


  return (
    <>

<div className="text-center ml-7 shadow-xl w-60">
<div className="h-[15rem] ml- w-[15vw] rounded-lg max-sm:w-60">
<img className="h-50"src='https://ksaimg4.b8cdn.com/images/templates/darp/darp-logo-ar.png'/>
<h1 className="text-black font-serif p-3">service Guests of the Most Gracious</h1>
<button onClick={handleDetils}
className='bg-gray-200 rounded-full p-2 hover:bg-gray-600'>More Detiles</button>
</div>
</div>


    </>
  )
}

export default Card1