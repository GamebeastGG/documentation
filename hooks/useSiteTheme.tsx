//window.matchMedia('(prefers-color-scheme: dark)').matches

import { useState, useEffect } from 'react';
import { useTheme } from 'nextra-theme-docs';

function useSiteTheme() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("light");

    //console.log(theme, resolvedTheme)

    useEffect(() => {

        console.log("hello useEffect", theme, currentTheme)
        if (theme === "system") {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setCurrentTheme("dark");
            } else {
                setCurrentTheme("light");
            }
        } else if (theme) {
            setCurrentTheme(theme);
        }
    }, [theme]);

  return currentTheme;
}

export default useSiteTheme;