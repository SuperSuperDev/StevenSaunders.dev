import { logoutUser, useUser } from '@/lib/api';

import Button from './Button';

export default function LogoutButton() {
  const { userMutate } = useUser();
  const handleLogout = async () => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    await logoutUser();
    userMutate();
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
