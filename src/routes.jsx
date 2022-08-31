import {Route, Routes} from "react-router-dom";
import Beranda from "./pages/Beranda";
import Profile from "./pages/Profile";
import Informasi from "./pages/Informasi";

export default function Router() {
    return(
        <>
            <Routes>
                <Route path="/" element={ <Beranda/> }/>
                <Route path="profile" element={<Profile/>}  />
                <Route path="informasi" element={<Informasi/>}/>
            </Routes>
        </>
    );
}
