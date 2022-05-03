import { logoutUser, useUser } from '@/lib/api';

import Button from './Button';

export default function LogoutButton() {
  const { userMutate, isAuthenticated } = useUser();
  const handleLogout = () => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    logoutUser();

    userMutate(isAuthenticated === false);
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
