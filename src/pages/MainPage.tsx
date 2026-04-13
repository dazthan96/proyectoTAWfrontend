import { Outlet } from "react-router-dom";
import { MainLayoutComponent } from "../layouts/MainLayout";
function MainPage(){
    return (
        <MainLayoutComponent>
            <Outlet/>
        </MainLayoutComponent>
    )
}
export {MainPage}