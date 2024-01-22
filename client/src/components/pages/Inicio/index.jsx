import React from 'react'
import './index.css'
import { NoticiasCortas } from '../../atoms/NoticiasCortas'
import { Row, Col } from 'react-bootstrap';

export const Inicio = () => {
    return (
        <div className='noticias-cortas-index'>
            <div className='noticias-cortas-titulo'>
                <h2>ÚLTIMAS NOTICIAS</h2>
            </div>

            <Row className='ultimas__noticias-grid-container'>
                <Col lg={3} xs={12} className="noticia-col"><NoticiasCortas /></Col>
                <Col lg={3} xs={12} className="noticia-col"><NoticiasCortas /></Col>
                <Col lg={3} xs={12} className="noticia-col"><NoticiasCortas /></Col>
            </Row>

        </div>
    );
}