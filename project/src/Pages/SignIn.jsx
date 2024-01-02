
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSignin = () => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(formData.email)
      console.log(parsedData.email)
    
      console.log(formData.password)
      console.log(parsedData.password)

      if (formData.email === parsedData.email && formData.password === parsedData.password) {
        alert('Signin successful!');
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        navigate('/AllCard');
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('User not found');
    }
    setFormData({
      email: '',
      password: ''

    });
  };

  return (
    <>
      <div className='flex justify-center mt-20 max-sm:flex-col'>
        {/* <img className=" h-80"src={login}/> */}
        <div className='border-2 border-solid-black rounded-lg shadow-lg flex flex-col mb-20 w-96 h-96 justify-around items-center max-sm:w-60 max-sm:m-10  '>
          <h1 className='font-bold text-4xl text-gray-800 font-serif '>LogIn</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-60 bg-white shadow-md px-4 py-2 mb-4 border border-gray-300 rounded max-sm:w-52 " 
            placeholder='Enter Email'
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-60 bg-white shadow-md px-4 py-2 mb-4 border border-gray-300 rounded max-sm:w-52 " 
            placeholder='Enter Password'/>
          <button
            onClick={handleSignin}
          className="w-60 shadow-md  px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-800 max-sm:w-52">
            LogIn
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;