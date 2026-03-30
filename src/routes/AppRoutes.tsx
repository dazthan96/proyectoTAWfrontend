import type React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
function AppRoutes():React.JSX.Element{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="dashboard" element={<DashboardPage/>}/>
            </Routes>
        </BrowserRouter>
    )
} 
export{AppRoutes}