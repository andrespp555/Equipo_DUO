import React from 'react';
import style from "../../scss/style.css";
import { Container, Row, Col } from 'react-bootstrap'

const Index = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center align-items-center">
                    <Col md="auto"><h1 className="display-1 mt-5 text-shadow">Sistema de Ventas WEB</h1></Col>
                    <hr/>
                    <Col md="auto"><h4 className="display-4 text-primary">Bienvenido</h4></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index
