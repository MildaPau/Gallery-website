import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectRedirect } from '../store/features/navigation/navigation-selectors';
import { useRootSelector } from '../store/hooks';
import { selectAuthLoggedIn } from '../store/selectors';

const RequireVisitor = ({ children }: { children: JSX.Element }) => {
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const redirect = useRootSelector(selectRedirect);

  if (loggedIn) {
    return <Navigate to={redirect ?? '/admin'} />;
  }

  return children;
};

export default RequireVisitor;
