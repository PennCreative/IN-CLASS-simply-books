import React from 'react';
import Button from 'react-bootstrap/Button';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <User
        style={{ color: 'white' }}
        image={user.photoURL}
        name={user.displayName}
        email={user.email}
        lastLogin={user.metadata.lastSignInTime}
      />
      <Button variant="danger" type="button" onClick={signOut}>Sign Out</Button>
    </>
  );
}
