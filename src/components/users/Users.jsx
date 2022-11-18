import React from 'react';

import UserPreview from './UserPreview';

import { useAppSelector } from '../../store/hooks';

import './Users.scss';

const Users = () => {
  const users = useAppSelector((state) => state.users.users);
  const isLoading = useAppSelector((state) => state.isLoading);
  console.log(users);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className='users'>
      {users.map((user) => {
        return <UserPreview key={user.id} {...user} />;
      })}
    </div>
  );
};

export default Users;
