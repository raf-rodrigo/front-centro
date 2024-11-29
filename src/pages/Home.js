import {Col, Container, Row} from "react-bootstrap";
import Carrosel from "../components/Carrosel";

import im from '../img/im.jpeg';
import tx from '../img/Designer.jpeg';
import conf from '../img/confratenizacao.jpeg';
import Tabela from "../components/Tabela";

export default function Home() {
    return (
        <div id="margem_container">
            <Container>
                <h3 id="cabecalho_page">Home</h3>
                <Row className="my-2">
                    <Col>
                        <p className="text_justify">
                            Seja Bem Vindo(a), ao Lar Espirita - O Caminho da Família Unida<br/>Com mais de 30 anos, temos
                            ajudado inúmeras pessoas em busca de esclarecimentos e assistência
                            espiritual.<br/>Somos uma organização espírita, fundada em 1992 atuando há mais de 30 anos na
                            realização de
                            atendimentos espirituais e ações assistenciais para as pessoas que buscam: esclarecimentos,
                            orientação, ajuda, assistência espiritual e moral.
                        </p>
                    </Col>
                    <Col>
                        <div className="" id="container_carousel">
                            <Carrosel
                                img_1={im}
                                title_1="text 1"
                                content_1="O tratamento é"
                                img_2={tx}
                                title_2=""
                                content_2=""
                                img_3={conf}
                                title_3=""
                                content_3=""
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col sx={5}>
                        <h4>Programção</h4>
                            <Tabela />
                        <a className="text-white flex-row justify-content-end" href={'/programacao'}>ver mais...</a>
                    </Col>
                    <Col sx={5}>
                        <h4>Curso</h4>
                        <Tabela />
                        <a href={'/programacao'}>ver mais...</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}