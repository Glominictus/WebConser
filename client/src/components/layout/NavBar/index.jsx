import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TasasConservatorio from '../../../assets/docs/TasasConservatorio.pdf'
import TasasEscola from '../../../assets/docs/tasas-escola.pdf'

import './index.css'

export const NavBar = () => {
  const { t } = useTranslation()

  const centro = [
    { key: 'novas', path: '/centro/novas' },
    { key: 'benvida', path: '/centro/benvida' },
    { key: 'historia', path: '/centro/historia' },
    { key: 'ondeEstamos', path: '/centro/onde-estamos' },
    { key: 'instalacions', path: '/centro/instalacions' },
    { key: 'organigrama', path: '/centro/organigrama' },
    { key: 'calendarioActividades', path: '/centro/calendario' },
    { key: 'formacions', path: '/centro/formacions' },
  ]

  const conservatorio = [
    { key: 'ofertaAcademica', path: '/conservatorio/oferta-academica' },
    { key: 'planEstudos', path: '/conservatorio/plan-estudos' },
    { key: 'programacionsDidacticas', path: '/conservatorio/programacions-didacticas' },
    { key: 'departamentos', path: '/conservatorio/departamentos' },
    { key: 'horarios', path: '/conservatorio/horarios' },
    { key: 'prezosPublicos', path: TasasConservatorio, isPdf: true },
    { key: 'solicitudeTitoria', path: '/conservatorio/solicitude-titoria' },
    { key: 'horarioTitorias', path: '/conservatorio/horario-titoria' },
    { key: 'documentos', path: '/conservatorio/documentos' },
  ]

  const acceso = [
    { key: 'solicitudePraza', path: '/acceso/solicitude-praza' },
    { key: 'primeiroElemental', path: '/acceso/primeiro-elemental' },
    { key: 'primeiroProfesional', path: '/acceso/primeiro-profesional' },
    { key: 'outrosCursos', path: '/acceso/outros-cursos' },
  ]

  const secretaria = [
    {
      key: 'bolsas',
      path: 'https://www.educacionyfp.gob.es/gl/servicios-al-ciudadano/catalogo/estudiantes/becas-ayudas/para-estudiar/artisticas/becas-generales-no-universitarias.html',
      isExternal: true,
    },
    { key: 'contacto', path: '/secretaria/contacto' },
    { key: 'impresos', path: '/secretaria/impresos' },
    { key: 'titulo', path: '/secretaria/titulo' },
    { key: 'lexislacion', path: '/secretaria/lexislacion' },
    { key: 'trasladoExpediente', path: '/secretaria/traslado-expediente' },
    { key: 'validacions', path: '/secretaria/validacions' },
  ]

  const multimedia = [
    { key: 'about', path: '/multimedia/about' },
    { key: 'imaxes', path: '/multimedia/imaxes' },
    { key: 'videos', path: '/multimedia/videos' },
  ]

  const escolaDeMusica = [
    { key: 'escola', path: '/escola-de-musica/escola' },
    { key: 'planEstudos', path: '/escola-de-musica/plan-estudos' },
    { key: 'solicitudePraza', path: '/escola-de-musica/solicitude-praza' },
    { key: 'solicitudeTitoria', path: '/escola-de-musica/solicitude-titoria' },
    { key: 'horarioTitorias', path: '/escola-de-musica/horario-titoria' },
    { key: 'cronograma', path: '/escola-de-musica/cronograma' },
    { key: 'prezosPublicos', path: TasasEscola, isPdf: true },
    { key: 'documentos', path: '/escola-de-musica/documentos' },
    { key: 'impresos', path: '/escola-de-musica/impresos' },
    { key: 'horarios', path: '/escola-de-musica/horarios' },
  ]

  const renderNavDropdown = (titleKey, itemKey, items) => (
    <NavDropdown title={t(`nav.sections.${titleKey}`)} id={`nav-dropdown-${titleKey}`}>
      {items.map((item, idx) => {
        const label = t(`nav.${itemKey}.${item.key}`)
        if (item.isExternal) {
          return (
            <NavDropdown.Item key={idx} href={item.path} target="_blank" rel="noopener noreferrer">
              {label}
            </NavDropdown.Item>
          )
        }
        if (item.isPdf) {
          return (
            <NavDropdown.Item key={idx} as="a" href={item.path} target="_blank" rel="noopener noreferrer">
              {label}
            </NavDropdown.Item>
          )
        }
        return (
          <NavDropdown.Item key={idx} as={NavLink} to={item.path}>
            {label}
          </NavDropdown.Item>
        )
      })}
    </NavDropdown>
  )

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label={t('nav.toggle')} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-around">
            <Nav.Link as={NavLink} to="/">
              {t('nav.inicio')}
            </Nav.Link>
            {renderNavDropdown('centro', 'centro', centro)}
            {renderNavDropdown('conservatorio', 'conservatorio', conservatorio)}
            {renderNavDropdown('acceso', 'acceso', acceso)}
            {renderNavDropdown('secretaria', 'secretaria', secretaria)}
            {renderNavDropdown('multimedia', 'multimedia', multimedia)}
            {renderNavDropdown('escolaMusica', 'escola', escolaDeMusica)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
