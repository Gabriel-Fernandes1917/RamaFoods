import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export function Router() {
    
    return(
        <Routes>
            <Route path="/login" element={<h1>2</h1>}/>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}