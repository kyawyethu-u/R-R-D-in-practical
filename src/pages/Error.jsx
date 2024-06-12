import {useNavigate} from 'react-router-dom'

const Error = () => {
    const navigate =useNavigate();
    const navigateHandler=()=>{
        navigate("/")}

  return (
   <>
   <h1>Page Not Found</h1>
   <button onClick={navigateHandler}>Go back Home</button>
   </>
  )
}

export default Error