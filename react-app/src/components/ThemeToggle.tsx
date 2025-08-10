import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved === 'true') setDarkMode(true);
      }, []);    

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) root.classList.add('dark');
        else root.classList.remove('dark');
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    return (
       <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
       </button>
    );
}