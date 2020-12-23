import { useTheme, useThemeUpdate } from '../ThemeContext'
export default function FunctionContextComponent() {

    const dark = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeStyles = {
        backgroundColor: dark ? '#333' : '#CCC',
        color: dark ? '#CCC' : "#333",
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                Function Component
        </div>
        </>

    )
}
