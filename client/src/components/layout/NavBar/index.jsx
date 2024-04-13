import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import  TasasConservatorio from '../../../assets/docs/TasasConservatorio.pdf'
import  TasasEscola  from '../../../assets/docs/tasas-escola.pdf'

import './index.css';

export const NavBar = () => {

    const centro = [
        { label: 'Novas', path: '/centro/novas' },
        { label: 'Benvida', path: '/centro/benvida' },
        { label: 'Historia', path: '/centro/historia' },
        { label: 'Onde estamos', path: '/centro/onde-estamos' },
        { label: 'Instalacións', path: '/centro/instalacions' },
        { label: 'Organigrama', path: '/centro/organigrama' },
        { label: 'Calendario de Actividades', path: '/centro/calendario' },
        { label: 'Formacións', path: '/centro/formacions' },
    ];

    const conservatorio = [
        { label: 'Oferta Académica', path: '/conservatorio/oferta-academica' },
        { label: 'Plan de Estudos', path: '/conservatorio/plan-estudos' },
        { label: 'Programacións Didácticas', path: '/conservatorio/programacions-didacticas' },
        { label: 'Departamentos', path: '/conservatorio/departamentos' },
        { label: 'Horarios', path: '/conservatorio/horarios' },
        { label: 'Prezos Públicos', path: TasasConservatorio, isPdf: true },
        { label: 'Solicitude de Titoría', path: '/conservatorio/solicitude-titoria' },
        { label: 'Horario de Titorías', path: '/conservatorio/horario-titoria' },
        { label: 'Documentos', path: '/conservatorio/documentos' },
    ];

    const acceso = [
        { label: 'Solicitude de Praza', path: '/acceso/solicitude-praza' },
        { label: '1º Grao Elemental', path: '/acceso/primeiro-elemental' },
        { label: '1º Grao Profesional', path: '/acceso/primeiro-profesional' },
        { label: 'Outros Cursos', path: '/acceso/outros-cursos' },
    ];

    const secretaria = [
        { label: 'Bolsas', path: 'https://www.educacionyfp.gob.es/gl/servicios-al-ciudadano/catalogo/estudiantes/becas-ayudas/para-estudiar/artisticas/becas-generales-no-universitarias.html', isExternal: true },
        { label: 'Contacto', path: '/secretaria/contacto' },
        { label: 'Impresos', path: '/secretaria/impresos' },
        { label: 'Título', path: '/secretaria/titulo' },
        { label: 'Lexislación', path: '/secretaria/lexislacion' },
        { label: 'Traslado de Expediente', path: '/secretaria/traslado-expediente' },
        { label: 'Validacións', path: '/secretaria/validacions' },
    ];

    const multimedia = [
        { label: 'Acerca das Imaxes e dos Videos', path: '/multimedia/about' },
        { label: 'Imaxes', path: '/multimedia/imaxes' },
        { label: 'Videos', path: '/multimedia/videos' },
    ];

    const escolaDeMusica = [
        { label: 'Escola', path: '/escola-de-musica/escola' },
        { label: 'Plan de Estudos', path: '/escola-de-musica/plan-estudos' },
        { label: 'Solicitude de Praza', path: '/escola-de-musica/solicitude-praza' },
        { label: 'Solicitude de Titoría', path: '/escola-de-musica/solicitude-titoria' },
        { label: 'Horario de Titorías', path: '/escola-de-musica/horario-titoria' },
        { label: 'Cronograma', path: '/escola-de-musica/cronograma' },
        { label: 'Prezos Públicos', path: TasasEscola, isPdf: true },
        { label: 'Documentos', path: '/escola-de-musica/documentos' },
        { label: 'Impresos', path: '/escola-de-musica/impresos' },
        { label: 'Horarios', path: '/escola-de-musica/horarios' },
    ];

    const renderNavDropdown = (items, title) => (
        <NavDropdown title={title} id={`nav-dropdown-${title.toLowerCase()}`}>
            {items.map((item, idx) => {
                if (item.isExternal) {
                    return (
                        <NavDropdown.Item key={idx} href={item.path} target="_blank" rel="noopener noreferrer">
                            {item.label}
                        </NavDropdown.Item>
                    );
                } else if (item.isPdf) {
                    return (
                        // Para los PDFs utilizamos un elemento <a> directamente
                        // Esto permite abrir el PDF en una nueva pestaña
                        <NavDropdown.Item key={idx} as="a" href={item.path} target="_blank" rel="noopener noreferrer">
                            {item.label}
                        </NavDropdown.Item>
                    );
                } else {
                    // Enlaces internos siguen utilizando NavLink
                    return (
                        <NavDropdown.Item key={idx} as={NavLink} to={item.path}>
                            {item.label}
                        </NavDropdown.Item>
                    );
                }
            })}
        </NavDropdown>
    );

    return (
        <Navbar className='navbar' variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-around">
                        <Nav.Link as={NavLink} to="/" >Inicio</Nav.Link>
                        {renderNavDropdown(centro, 'Centro')}
                        {renderNavDropdown(conservatorio, 'Conservatorio')}
                        {renderNavDropdown(acceso, 'Acceso')}
                        {renderNavDropdown(secretaria, 'Secretaria')}
                        {renderNavDropdown(multimedia, 'Multimedia')}
                        {renderNavDropdown(escolaDeMusica, 'Escola de Musica')}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
