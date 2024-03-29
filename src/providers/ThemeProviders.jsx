'use client'
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";


const ThemeProviders = ({children}) => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return <>{children}</>
    }

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default ThemeProviders;