import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import useSiteTheme from 'hooks/useSiteTheme';
import '../styles/globals.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = useSiteTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <Component {...pageProps} />
}