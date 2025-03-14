import {useEffect} from 'react'
import './App.css'
import axios from "axios";
import ResponsiveAppBar from "./components/Appbar.tsx";

function App() {

    const get = async () => {
        const data = await axios.get('/aaa');
        console.log(data.data);
    }

    useEffect(() => {
        get();
    }, []);

    return (
        <>
            <ResponsiveAppBar/>
        </>
    )
}

export default App
