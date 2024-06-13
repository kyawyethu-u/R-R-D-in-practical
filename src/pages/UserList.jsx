
import { useLoaderData } from 'react-router-dom'

const UserList = () => {
  const USERDATA = useLoaderData();
  return (
    <>
  {
      USERDATA.map((userObj)=>(
        <div className="card" key={userObj.id}>
          <h1>{userObj.name}</h1>
          <p>{userObj.email}</p>
          <p>{userObj.phone}</p>
          </div>
      ))

  } 
    
    </>

    
  )
}

export default UserList

export const loader =async()=>{
const response = await fetch("https://jsonplaceholder.typicode.com/users");
if (!response.ok){

}else{
  const userData  = await response.json();
  console.log(userData);
  return userData;
}
}