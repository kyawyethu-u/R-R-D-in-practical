import React from 'react'

const User = ({userID}) => {
    let userName;
    switch(userID){
        case 1:
            userName = "Mg Mg";
            break;
        case 2:
            userName = "Zaw Zaw";
            break;
        case 3:
            userName = "Su Su";
            break;
        case 4:
            userName = "Aye Aye";
            break;
        case 5:
            userName = "Kyaw Kyaw";
            break;

        default:
            userName = "Unknown user";
            break;
            
    }
  return <p>Posted by <span className='userName'>{userName}</span></p>
}

export default User