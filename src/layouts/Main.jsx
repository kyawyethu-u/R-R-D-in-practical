import { Outlet } from 'react-router-dom'
import NavBar from '../coponents/NavBar'


const Main = () => {
  return (
   <>
   <NavBar/>
    <Outlet/>

   </>
  )
}

export default Main