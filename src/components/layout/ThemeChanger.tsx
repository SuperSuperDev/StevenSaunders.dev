import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [toggleTheme, setToggleTheme] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
    setTheme(toggleTheme ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div>
      <button onClick={handleToggleTheme}>{theme}</button>
    </div>
  );
};

export default ThemeChanger;
