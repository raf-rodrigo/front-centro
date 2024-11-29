import {Row, Col, Navbar, Nav} from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="w-100 px-4 h-50 mt-5 py-5" style={{ backgroundColor: '#017cc4', borderTop: '#017cc2' }}>

            <Row>
                <Col sx={5}>
                    <div>
                        <p className="text-justify fw-bold">
                            Lar Espírita - O Caminho da Família Unida<br/>
                            Rua Oliveira Melo, 708 - Vila São José (Ipiranga)<br/>
                            São Paulo / SP - CEP:
                        </p>
                    </div>
                </Col>
                <Col xs={6}>
                    <di>
                        <p className="text-center fw-bold">
                            Horários de atendimentos:<br/>
                            Terças-Feiras das 14:30 às 16:00h<br/>
                            Quartas, Quintas e Sextas-Feiras das 19:30 às 2:00h
                        </p>
                    </di>
                </Col>
                <Col>
                    <Navbar>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <span className="h5 px-2"><Nav.Link href="#"><FaFacebook/></Nav.Link></span>
                            <span className="h5 px-2"><Nav.Link href="#"><FaInstagram/></Nav.Link></span>
                            <span className="h5 px-2"><Nav.Link href="#"><FaWhatsapp/></Nav.Link></span>
                            <span className="h3 px-2"><Nav.Link href="#"><FaYoutube/></Nav.Link></span>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>

        </footer>
    );
}