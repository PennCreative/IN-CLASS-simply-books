/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({
  email, firebaseKey, firstName, lastName, favorite, image,
}) {
  return (
    <>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>
      <img src={image} alt={firstName} />
      <div>Favorite: {favorite}</div>
      <div>firebaseKey: {firebaseKey}</div>
    </>
  );
}

AuthorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  firebaseKey: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool,
  image: PropTypes.string,
};
AuthorCard.defaultProps = {
  firstName: 'Michael',
  lastName: 'Pennington',
  firebaseKey: '123',
  favorite: true,
  email: 'mp@gmail.com',
  image: 'https://media1.popsugar-assets.com/files/thumbor/ZMeA-8jNDh0S_WyN9zevUfZ9fSo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/19/892/n/1922398/1873e28627848827_GettyImages-666298342/i/Kristofer-Hivju-Tormund-Giantsbane.jpg',
};
