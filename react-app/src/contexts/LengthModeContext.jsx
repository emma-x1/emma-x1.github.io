import { createContext, useState, useContext } from 'react';

const LengthModeContext = createContext();

export const LengthModeProvider = ({ children }) => {
  const [isLong, setIsLong] = useState(true);
  const toggleLengthMode = () => setIsLong(prev => !prev);

  return (
    <LengthModeContext.Provider value={{ isLong, toggleLengthMode }}>
      {children}
    </LengthModeContext.Provider>
  );
};

export const useLengthMode = () => useContext(LengthModeContext);
