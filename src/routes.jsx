import {Route, Routes} from "react-router-dom";
import Beranda from "./pages/Beranda";

export default function Router() {
    return(
        <>
            <Routes>
                <Route path="/" element={ <Beranda/> }/>
            </Routes>
        </>
    );
}
