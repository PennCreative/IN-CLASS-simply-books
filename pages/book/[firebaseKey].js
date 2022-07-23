/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { viewBookDetails } from '../../api/mergedData';

export default function ViewBook() {
  const [bookDetails, setBookDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewBookDetails(firebaseKey).then(setBookDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={bookDetails.image} alt={bookDetails.title} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {bookDetails.title} by
        </h5>
        <h6>{bookDetails.authorObject?.first_name} {bookDetails.authorObject?.last_name}</h6>
        Author Email: <a href={`mailto:${bookDetails.authorObject?.email}`}>{bookDetails.authorObject?.email}</a>
        <h5>{bookDetails.authorObject?.favorite ? ' 🤍' : ''}</h5>
        <p>{bookDetails.description || ''}</p>
        <hr />
        <p>
          {bookDetails.sale
            ? `🏷️ Sale $${bookDetails.price}`
            : `$${bookDetails.price}`}
        </p>
        <Link href={`/author/${bookDetails.authorObject?.firebaseKey}`} passHref>
          <Button variant="info" className="m-2">Checkout Author</Button>
        </Link>
      </div>
    </div>
  );
}
