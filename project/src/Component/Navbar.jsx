import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserProfile from './UserProfile';
const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isLoggedIn');

  const storedData = localStorage.getItem('userData');
  console.log(storedData);
  const initialUserName = storedData ? JSON.parse(storedData).name : '';
  console.log(initialUserName);

  const [userName, setUserName] = useState('');


  console.log(isAuthenticated);
  console.log({ userName });

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem('userData');
    console.log(localStorage.getItem('isLoggedIn'));
    setUserName('');
    console.log({ userName });
    navigate('/');
  };



  const handelProfile = () => {
    // navigate('/UserProfile');
    navigate(`/UserProfile/${userName}`);
  };

  useEffect(() => {
    setUserName(initialUserName);
  }, [initialUserName]);

  useEffect(() => {
    if (initialUserName) {
      navigate('/UserProfile');
    }
  }, []);

  // useEffect(() => {
  //   if (initialUserName) {
  //     setUserName(initialUserName);
  //   }
  // }, []);
  useEffect(() => {
    if (initialUserName) {
      navigate(`/UserProfile/${initialUserName}`);
    }
  }, []);
  return (

    <>
      <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
      <div className="flex items-center">
      <h1 className="text-white text-lg font-semibold">Expo Saudi Arabia</h1>
    </div> 
    <div class="flex items-center">
          {!isAuthenticated?
          
          (
        <>

        <Link className='text-white text-sm mr-4 text ' to='/SignUp'>SignUp </Link> 
        <Link 
        className='bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full' to='/SignIn'> SignIn </Link> 
        </>
          )
          : 
          (

            <>
            <button className='text-white font-bold m-5 m'
            onClick={handleLogout}>Log out</button>
            <Link to={`/UserProfile/${userName}`} className="text-black bg-white">
                {userName}
              </Link>
            {/* <button className='text-black bg-white shadow-lg rounded-lg p-2 font-sans' onClick={handelProfile}>{userName}</button> */}
            </>
        ) 

          }
     </div>
  </div>
</div>
</nav>
</>


  )}

export default Navbar
