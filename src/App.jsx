
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './component/layout/RootLayout'
import Home from './component/page/Home'
import About from './component/page/About'
import Shop from './component/page/Shop'
import Contacts from './component/page/Contacts'
import Journal from './component/page/Journal'
import Error from './component/page/Error'
import SignUp from './component/page/SignUp'

function App() {
  

  return (
   <>
   <Routes>
    <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="contacts" element={<Contacts/>}/>
    <Route path="journal" element={<Journal/>}/>
    <Route path="signup" element={<SignUp/>}/>
    <Route path="*" element={<Error/>}/>

    </Route>
   </Routes>
   </>
  )
}

export default App
