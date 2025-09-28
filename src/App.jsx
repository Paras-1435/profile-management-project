
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'


import Users from './pages/User'
import NewUser from './pages/NewUser'
import Home from './pages/Home'
import './App.css';


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>

    <Route path='' element={<Home/>}/>
    <Route path='users' element={<Users/>}/>
    <Route path='add-user' element={<NewUser/>}/>
    </Route>
  )
)




function App() {  


  return <RouterProvider router={router}/>


}


export default App