import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAuthors } from '../api/authorData';
import AuthorCards from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getAuthors(user.uid).then(setAuthors);
  }, [user.uid]);

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over authors here using AuthorCard component */}
        {authors.map((author) => (
          <AuthorCards key={author.firebaseKey} authorObj={author} onUpdate={getAuthors} />
        ))}
      </div>

    </div>
  );
}
