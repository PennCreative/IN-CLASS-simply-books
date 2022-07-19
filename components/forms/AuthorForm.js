// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useAuth } from '../../utils/context/authContext';
// import { createAuthor, updateAuthor } from '../../api/authorData';

// const initialState = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   favorite: false,
// };

// function AuthorForm({ obj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const [authors, setAuthors] = useState([]);
//   const router = useRouter();
//   const { user } = useAuth();
// }

// AuthorForm.propTypes = {
//   obj: PropTypes.shape({
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     email: PropTypes.string,
//     favorite: PropTypes.bool,
//     firebaseKey: PropTypes.string,
//     uid: PropTypes.string,
//   }),
// };

// AuthorForm.defaultProps = {
//   obj: initialState,
// };

// export default AuthorForm;
