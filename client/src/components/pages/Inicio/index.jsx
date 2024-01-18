import React from 'react'
import './index.css'
import { NoticiasCortas } from '../../atoms/NoticiasCortas'
import { Row, Col } from 'react-bootstrap';

export const Inicio = () => {
    return (
        <div className='inicio_wrapper'>
            <div className='noticias-cortas-index'>
                <div className='noticias-cortas-index-title'>
                    <h2>Últimas noticias</h2>
                </div>
                <Row className='noticias-cortas-grid-container'>
                    <Col lg={4} xs={12}><NoticiasCortas /></Col>
                    <Col lg={4} xs={12}><NoticiasCortas /></Col>
                    <Col lg={4} xs={12}><NoticiasCortas /></Col>
                </Row>
                </div>
            </div>
        
    )
}
