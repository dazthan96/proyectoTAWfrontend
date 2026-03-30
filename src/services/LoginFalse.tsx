import { USUARIOS } from "../data/DatoEjemplo"
function loginFalse(user:string, contrasenia:string, navigate:any):boolean{
    const res = USUARIOS.find(u=> u.nombre_usuario===user && u.constrasenia===contrasenia);
    if (!res){
        alert("Credenciales incorrectas");
        return false;
    }else{
        navigate("/dashboard")
        return true;
    }
}
export{loginFalse}