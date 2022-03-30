import { logoutUser, useUser } from '@/lib/api';

export default function LogoutButton() {
  const { userMutate, isAuthenticated } = useUser();
  const handleLogout = () => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    logoutUser();

    userMutate(isAuthenticated === false);
  };
  return <button onClick={handleLogout}>Logout</button>;
}
