/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function User({
  name, email, image, lastLogin,
}) {
  return (
    <Card style={{ width: '14rem', margin: '10px', color: 'black ' }}>
      <Card.Img variant="top" src={image} alt={image} style={{ height: '8rem', width: '8rem', justify: 'center' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p className="card-text bold">{email}</p>
        <p className="card-text bold">{lastLogin}</p>
      </Card.Body>
    </Card>

  );
}
User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
}.isRequired;
