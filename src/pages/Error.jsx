import {Link, useRouteError} from 'react-router-dom'

const Error = () => {
    const error =useRouteError();
    let title = "Unknown Error.";
    if (error.status === 500){
        title = error.data.message;
    }
  return (
   <>
   <h1>{title}</h1>
   <Link to="/">
   <button>Go back Home</button>
   </Link>
   </>
  )
}

export default Error