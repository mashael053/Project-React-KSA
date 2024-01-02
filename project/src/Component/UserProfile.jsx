import { json, useParams } from 'react-router-dom';
const UserProfile = () => {
  const { userName } = useParams();  
  const storedData = localStorage.getItem('userData');
  const userinfo = JSON.parse(decodeURIComponent(storedData));

  
  return (
    <>

<div className='m-20'>
<div className=' border-4 border-gary-100 shadow-4xl flex flex-col  w-[25vw] m-auto h-[70vh] gap-8 max-sm:w-[70vw] max-sm:h-[85vh] '>
  <img className='w-20 ml-40 max-sm:ml-0' src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='></img>
<h2 className='font-bold font-sans text-gray-800 ml-2'>User Profile</h2>
<p className='font-sans text-gray-800 font-bold ml-2'>Welcome,{userinfo.title} : {userName}</p>
 <p className='font-sans text-gray-800 font-bold ml-2'>Email: {userinfo.emai}</p> 
<p className='font-sans text-gray-800 font-bold ml-2'>Age: {userinfo.age}</p>
<p className='font-sans text-gray-800 font-bold ml-2'>country: {userinfo.country}</p>
<p className='font-sans font-bold text-gray-800 ml-2'>city: {userinfo.city}</p> 
<p className='font-sans font-bold text-gray-800 ml-2'>sex: { userinfo.sex}</p>

</div>

      </div>
    </>
  );
};

export default UserProfile;