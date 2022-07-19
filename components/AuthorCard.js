/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

function AuthorCard({ authorObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.firebaseKey}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>
          {authorObj.firstName}
          {authorObj.lastName}
        </Card.Title>
        {/* DYNAMIC LINK TO VIEW THE author DETAILS  */}
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">
            VIEW
          </Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE author DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    firebaseKey: PropTypes.string,
    email: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
// AuthorCard.defaultProps = {
//   firstName: 'Michael',
//   lastName: 'Pennington',
//   firebaseKey: '123',
//   favorite: true,
//   email: 'mp@gmail.com',
//   image: 'https://media1.popsugar-assets.com/files/thumbor/ZMeA-8jNDh0S_WyN9zevUfZ9fSo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/19/892/n/1922398/1873e28627848827_GettyImages-666298342/i/Kristofer-Hivju-Tormund-Giantsbane.jpg',
// };

export default AuthorCard;
