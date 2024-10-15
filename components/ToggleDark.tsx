import { useTheme } from '@/context/ThemeProvider';
import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ToggleDark = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return isDarkMode ? (
    <MdLightMode className="cursor-pointer" size={28} onClick={toggleDarkMode} />
  ) : (
    <MdDarkMode className="cursor-pointer" size={28} onClick={toggleDarkMode} />
  );
};

export default React.memo(ToggleDark);
