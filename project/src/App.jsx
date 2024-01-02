import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import SignIn from './Pages/SignIn'
import Footer from './Footer'
import Navbar from './Component/Navbar'
import SignUp from './Pages/SignUp'
import Health from './Component/Health'
import Info from './Info'
import UserProfile from './Component/UserProfile'
import AllCard from './Component/AllCard'
import DetailsAllCard from './Component/DetailsAllCard'
function App() {
  return (
    <>

    <Navbar/>
<Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/SignIn' element={<SignIn/>}></Route> 
<Route path='/UserProfile/:userName' element={<UserProfile/>}></Route>
<Route path='/SignUp' element={<SignUp/>}></Route>
<Route path='/AllCard' element={<AllCard/>}></Route>
<Route path='/DetailsAllCard/:DeatilsId' element={<DetailsAllCard/>}></Route>
  </Routes> 

<Footer/> 
    </>
  )
}

export default App
