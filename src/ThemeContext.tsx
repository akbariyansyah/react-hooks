import React, { useContext } from "react"
import { useState } from "react"


const ThemeContext = React.createContext(false)

const ThemeUpdateContext = React.createContext(() => { })

export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDark => !prevDark)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}