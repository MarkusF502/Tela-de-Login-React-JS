import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

function Login(){
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        alert(`Enviando as informações: ${username} e ${password}.`);
    }

    return (
        <div className="container">
         <form onSubmit={handleSubmit()}> 
            <h1>Acesse o Sistema</h1>
            <div><input type="email" name="" id=""  placeholder="Insira seu email aqui" onChange={(e) => {setUsername(e.target.value)}}/><FaUser className='icon'/></div>
            <div><input type="password" name="" id="" placeholder="Insira a senha" onChange={(e) => {setPassword(e.target.value)}}/><FaLock className='icon'/></div>
            <div className="recall-forget"><label><input type="checkbox" name="" id="" />Lembrar de mim</label>
            <label ><a href="#">Esqueci a senha</a></label></div>
            <button>Fazer Login</button>
            <div className="sign-in">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
         </form>
        </div>
    )
}

export default Login