import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contex/UserContex/UserState';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const Profile = () => {
    const { getLoggedUserInfo, user, token } = useContext(UserContext);

    useEffect(()=>{
        getLoggedUserInfo();
    }, [token])
    if (!user){
        return  <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      />;
    }
  return (
    <div>
        <h3>Profile</h3> 
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.lastname}</p>
    </div>
  )
}

export default Profile