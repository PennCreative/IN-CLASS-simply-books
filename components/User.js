/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <div>User</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Image: <img src={image} alt={name} /></div>
      <div>LastLogin: {lastLogin}</div>
    </>
  );
}
User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
};
User.defaultProps = {
  name: 'Michael Pennington',
  email: 'mp@gmail.com',
  image: 'https://media1.popsugar-assets.com/files/thumbor/ZMeA-8jNDh0S_WyN9zevUfZ9fSo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/19/892/n/1922398/1873e28627848827_GettyImages-666298342/i/Kristofer-Hivju-Tormund-Giantsbane.jpg',
  lastLogin: '2/19/1990 12:00:00',
};
