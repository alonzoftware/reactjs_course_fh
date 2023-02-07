import { ThemeProvider } from "@emotion/react"
import CssBaseline from '@mui/material/CssBaseline';
import { purpleTheme } from ".";

export const AppTheme = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
