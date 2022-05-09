import React, { useContext } from 'react';
import AuthContext from '../../features/auth/auth-context';

const AdminPage: React.FC = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>Turinio valdymo sistema</div>

  );
};

export default AdminPage;
