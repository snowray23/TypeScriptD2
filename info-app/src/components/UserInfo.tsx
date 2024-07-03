// Task 2: Implement a React component named UserInfo that receives props conforming to the UserInfoProps interface.

import React from 'react';
import UserInfoProps from '../interface/UserInfoProps';

const UserInfo: React.FC<UserInfoProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;