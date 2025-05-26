import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#ff80ab",
            },
        },
        typography: {
            fontFamily: "'Quicksand', sans-serif",
            fontSize: 16,
        },
    });
    return (
        <SessionProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
                <div className="app-background">
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </SessionProvider>
    );
}
