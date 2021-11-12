import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Features = () => {
    return (
    <Container>
        <Row className="justify-content-md-center align-items-center">
            <div className="alert alert-dark mt-1">
                <h1> Sobre Nosotros </h1>
                <hr/>
                <h4>Sistema de Ventas WEB</h4>
                <div>
                    <p>Realizado por</p>
                    <p>Cristian Andres Patiño P.</p>
                    <p>Yiriam Ochoa Sabogal.</p><br/>
                    <p>Programa Mision TIC 2022</p>
                    <p>Grupo Equipo_Duo</p>
                </div>
                <hr/>
                <div>
                    <h4>Para ingresar como admin</h4>
                    <p>email: pruebamisiontic@gmail.com</p>
                    <p>Pass:  prueba987654</p>
                </div>
            </div>
        </Row>
    </Container>
    )
}

export default Features
