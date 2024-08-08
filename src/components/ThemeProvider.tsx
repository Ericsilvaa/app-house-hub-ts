import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getItem, setItem } from '../utils/localStorage';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const initialState: ThemeContextProps = {
  theme: 'dark',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeContextProps>(initialState);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'dark',
  storageKey = 'project-react-theme',
}) => {
  const [theme, setThemeState] = useState(
    () => getItem(storageKey) || defaultTheme,
  );
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    const newTheme = theme === 'system' ? systemTheme : theme;
    root.classList.add(newTheme);

    setItem(storageKey, newTheme);
  }, [storageKey, systemTheme, theme]);

  const setTheme = (newTheme: string) => {
    const finalTheme = newTheme === 'system' ? systemTheme : newTheme;
    setItem(storageKey, finalTheme);
    setThemeState(finalTheme);
  };

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
