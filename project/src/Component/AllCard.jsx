
import Card1 from './Card1'
import Culture from '../Component/Culture'
import Health from './Health'
import Energy from './Energy'
import Neom from './Neom'
import DigitalEconomy from './DigitalEconomy'
import Info from '../Info'
import React, { useState } from 'react';

function AllCard() {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInfo, setFilteredInfo] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    if(query=== '')
    {
      return
    }
    const filteredData = Info.filter(
      (item) =>
        item.title.toLowerCase().includes(query) 
            );

    setFilteredInfo(filteredData);
    console.log(query)
    console.log(filteredData)
  };
  return (
    <>

      <h1 className='text-2xl text-center text-gray-800 font-semibold mt-5 max-sm:text-lg '>“Discover the achievements of the Kingdom of Saudi Arabia and its future vision in its sectors"</h1>
<div className='flex justify-center items-center'>
<input type='search' value={searchQuery}
        onChange={handleInputChange}
       className='border border-gray-900 p-1 shadow-2xl m-5 max-sm:w-30 max-sm:ml-10' placeholder='Search'></input>
      <button onClick={handleSearch}
      className='bg-gray-900 text-white p-1 shadow-lg rounded-lg'>Search</button>
</div>


            {filteredInfo.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <div>{item.summary}</div>
          <img src={item.image} alt="Image" />
        </div>
      ))}



<div className='grid grid-cols-3 gap-5 mt-9 mb-9 max-sm:grid-cols-1 max-sm:ml-5'>
<Card1></Card1>
<DigitalEconomy></DigitalEconomy>
<Culture></Culture>
<Health/>
<Energy></Energy>
<Neom></Neom>


</div>


    </>
  )
}

export default AllCard