import { useEffect, useState } from "react"

export const useTheme = () =>{
    const [theme ,setTheme] = useState(localStorage.theme)
    const activeTheme = theme === 'light' ? 'dark':'light'
    useEffect(() =>{
        const root = window.document.documentElement
        root.classList.remove(activeTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    },[theme, activeTheme])
    return [activeTheme, setTheme]
}
