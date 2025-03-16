import './App.css'
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import ResponsiveAppBar from "./components/Appbar.tsx";

const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
        },
        background: {
            default: '#fefbec',
        }
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ResponsiveAppBar/>
        </ThemeProvider>
    )
}

export default App
