import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [toggleTheme, setToggleTheme] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.document.documentElement.setAttribute('data-theme', theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
    const theme = toggleTheme ? 'light' : 'dark';
    // we set data-theme for DaisyUI
    window.document.documentElement.setAttribute('data-theme', theme);
    // we setTheme for tailwindCSS
    setTheme(theme);
  };

  if (!mounted) return null;

  return (
    <div>
      <button onClick={handleToggleTheme}>{theme}</button>
    </div>
  );
};

export default ThemeChanger;
