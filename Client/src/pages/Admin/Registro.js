import React from 'react'
import axios from "axios";


const Registro = () => {

    function handleOnsubmit(e){
        e.preventDefault();

        const userSchema = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            repeatEmail: e.target.repeatEmail.value,
            role: e.target.role.value,
            active: e.target.active.value
        };

        axios.post(`http://localhost:3977/api/V1/sign-up`, userSchema).then(res => {alert( 'Datos del usuario agregados' + e.target.name.value + '\n' + e.target.lastname.value + '\n' + e.target.email.value + '\n' + e.target.repeatEmail.value + '\n' + e.target.role.value + '\n' + e.target.active.value);window.location.reload(true);})

        
    }

    return (
          
        <div className="">
            <div className="row-fluid">

                {/* Contenedor*/}
                <div className="col-md-10 mx-auto">         
                    <div className="pt-3">
                        <div>
                            <h4>Registro de Usuarios</h4>
                            <hr/>
                        </div>

                        <div>    
                            <form onSubmit = {handleOnsubmit}>
                                <div className="grid grid-2 bg-dark p-3">
                                    <input type="text" placeholder="Nombre" name="name" id="name" required className="form-control form-control-sm"/><br/>

                                    <input type="text" placeholder="Apellido" name="lastname" id="lastname" required className="form-control form-control-sm"/><br/>

                                    <input type="email" placeholder="E-mail" name="email" id="email" required className="form-control form-control-sm"/><br/>

                                    <input type="email" placeholder="Repita E-mail" name="repeatEmail" id="repeatEmail" required className="form-control form-control-sm"/><br/>

                                    <label className="text-light">Seleccione Rol</label>
                                    <select className="form-control form-control-sm" name="role" id="role">
                                            <option value="vendedor">Vendedor</option>
                                            <option value="administrador">Administrador</option>
                                    </select><br/>

                                    {/* 
                                    <select className="form-control form-control-sm" name="active" id="active">
                                            <option value="activo">Activo</option>
                                            <option value="inactivo">Inactivo</option>
                                    </select><br/>
                                    */}
                                    <label className="text-light">Estado de Usuario</label>
                                    <input type="text" placeholder="Pendiente" name="active" id="active" required className="form-control form-control-sm" value="Pendiente" disabled/><br/>

                                    <button type="submit" className="btn btn-warning m-1">
                                        Registrar
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Registro
