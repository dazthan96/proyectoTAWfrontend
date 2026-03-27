import { USUARIOS } from "../data/DatoEjemplo"
function loginFalse(user:string, contrasenia:string){
    const res = USUARIOS.find(u=> u.nombre_usuario===user && u.constrasenia===contrasenia);
    if (!res){
        alert("Credenciales incorrectas");
        return false;
    }else{
        alert("Acceso concedido");
        return true;
    }
}
export{loginFalse}