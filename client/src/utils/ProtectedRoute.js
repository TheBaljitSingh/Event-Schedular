// // ProtectedRoute.js
// import React from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// import SignIn from '../auth/signIn';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = () => {
//     // Check if the token is stored in local storage
//     // const token = localStorage.getItem('token');
//     // return !!token; // Returns true if token is present, false otherwise
//     return true;
//   };
//   const navigate = useNavigate();

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
          
          
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
