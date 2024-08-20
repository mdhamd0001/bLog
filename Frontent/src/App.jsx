import { useState } from 'react'
import Signup from "./pages/CreateAcc"
import AddBlog from './pages/AddBlog'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import OneCard from './components/OneCard'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Addcat from './pages/Addcat'
import Proctection from './Service/Proctection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin></Signin>}/>
      <Route path='/signup' element={<Signup></Signup>}/>
      
      <Route path='/' element={<Proctection></Proctection>}>
      <Route path='/' element={<Home></Home>}/>

      <Route path='/OneCard/:id' element={<OneCard></OneCard>}/>
      <Route path='/addblog' element={<AddBlog></AddBlog>}/>
      <Route path='/addcat' element={<Addcat></Addcat>}/>
      </Route>
      
      
      
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
