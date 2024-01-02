import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [title , setTitle] = useState ('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  const navigate = useNavigate();

  const countries = [
    { code: 'us', name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago'] },
    { code: 'ca', name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal'] },
    { code: 'uk', name: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham'] },
  ];


  const handleSignUp = (e) => {
    e.preventDefault();

    if (name.length < 4) {
      alert('Name should be at least 4 characters long.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate password ("at least one letter and one number")
    // const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   alert('Password should contain at least one letter and one number.');
    //   return;
    // }

    // Perform sign-up logic and save user data
    const userData = {
      name,
      title,
      email,
      password,
      country,
      city,
      age,
      sex,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/SignIn');
  };

  return (

      <div className="flex flex-col items-center justify-center h-screen max-sm:w-60 max-sm:m-10 ">
        
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

        {/* Form fields */}


{/* NAME */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (at least 4 characters)"
          className="w-96 shadow-md px-4 py-2 mb-4 border border-gray-300 rounded max-sm:w-52" required/>
        

        {/* Title */}
        <select value={title} onChange={(e) => setTitle(e.target.value)}           
        className="w-96 bg-white shadow-md px-4 py-2 mb-4 border border-gray-300 rounded max-sm:w-52" required>
          <option value="">Select Title</option>
          <option value="Miss">Miss</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
        </select>

{/* email */}
        <input
          type="email"
          className="w-96 shadow-md px-4 py-2 mb-4 border border-gray-300 rounded max-sm:w-52"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required/>


{/* Password  */}
        <input
          type="password"
          value={password}
          className="w-96 px-4 shadow-md py-2 mb-4 border border-gray-300 rounded max-sm:w-52"

          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (at least one letter and one number)"
          required/>


{/* Country */}

        <select className="w-96  bg-white shadow-md  px-4 py-2 mb-4 border border-gray-300 rounded max-sm:w-52"

          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required>

{/* Country */}
          <option 
           value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}


        </select>
        {country && (
          <select
          className="w-96 px-4 py-2 mb-4 border  bg-white shadow-md  border-gray-300 rounded "

            value={city}
            onChange={(e) => setCity(e.target.value)}
            required>


            <option value="">Select City</option>
            {countries.find((c) => c.code === country).cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        )}
        
        <select className="w-96 px-4 py-2 mb-4 bg-white max-sm:w-52 shadow-md border border-gray-300 rounded"

        value={age} onChange={(e) => setAge(e.target.value)} required>
          <option value="">Select Age Range</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36+">36+</option>
        </select>



        <label>
          <input 
            type="radio"
            value="male"
            checked={sex === 'male'}
            onChange={(e) => setSex(e.target.value)}
            required/>
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={sex === 'female'}
            className='max-sm:m-3 m-3'
            onChange={(e) => setSex(e.target.value)}
            required
          />
          Female
        </label>
        <button className="w-96 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-800 max-sm:w-52"
        onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;