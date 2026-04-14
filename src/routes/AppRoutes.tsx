import type React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { VentasPage } from "../pages/VentasPage";
import { AbastecimientoPage } from "../pages/AbastecimientoPage";
import { ClientePage } from "../pages/ClientesPage";
import { ProveedoresPage } from "../pages/ProveedoresPage";
import { ProductosPage } from "../pages/ProductosPage";
import { UsuarioPage } from "../pages/UsuarioPage";
function AppRoutes():React.JSX.Element{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="main" element={<MainPage/>}>
                    <Route index element={<VentasPage />} />
                    <Route path="ventas" element={<VentasPage/>}/>
                    <Route path="abastecimiento" element={<AbastecimientoPage/>}/>
                    <Route path="clientes" element={<ClientePage/>}/>
                    <Route path="proveedores" element={<ProveedoresPage/>}/>
                    <Route path="productos" element={<ProductosPage/>}/>
                    <Route path="usuarios" element={<UsuarioPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 
export{AppRoutes}