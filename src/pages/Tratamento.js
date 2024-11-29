import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import passe from '../img/passe.jpeg';
import cromo from '../img/cromoterapia.jpeg';
import deso from '../img/deso.jpeg';

export default function Tratamento(){
    return (
        <div id="margem_container">
            <Container>
                <h3 id="cabecalho_page">Tratamentos</h3>
                <Row>
                    <Col>
                        <p>
                            O Lar Espírita - O Caminho da Família Unida não oferece nenhum tratamento, sem antes de uma
                            prévia avaliação com um de nossos orientadores. Ele, junto com os mentores esperituais,
                            escolherá o tratamento mais recomendado.
                        </p>
                        <ul>
                            <li>Passe (IM)</li>
                            <li>Cromoterapia</li>
                            <li>G3D (Desobsessão)</li>
                        </ul>
                        <p>
                            Vale à pena frisar que não aceitamos qualquer tipo de bonificação, por nenhum
                            tratramento.<br/>
                            JESUS explusou os mercadores do templo, condenando qualquer forma de comércio dos atos
                            celestiais dentro de uma casa de oração.<br/>
                            <span>“Curai os enfermos, sarai os leprosos, expeli os demônios. E dai de graça o que graça recebestes.” (Mateus 10:8)</span>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <h5>Passe - IM (IMPOSIÇÕES DAS MÃOS)</h5>
                    <Col>
                        <p className="text_justify">
                            Dentre os recursos valiosos de que podemos dispor em benefício do nosso próximo, destaca-se
                            a imposição das mãos em socorro da saúde debilitada fisicamente e mentalmente. A recuperação
                            de pacientes portadores de diversas enfermidades, estava incluída na pauta de tarefas
                            libertadoras de JESUS.<br/>
                            De acordo com a Gênese do mal de que cada nessecitado se fazia portador, Ele aplicava o
                            concuro terapêutico, restabelecendo o equilíbrio e favorecendo a paz.<br/>

                        </p>
                    </Col>
                    <Col xs={4}>
                        <Image id="imagem_arredondada" src={passe} width={350} alt="Pessoa dando passe"/>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <h5>Cromoterapia</h5>
                    <Col xs={4}>
                        <Image id="imagem_arredondada" src={cromo} width={350} alt="Pessoa dando passe"/>
                    </Col>
                    <Col>
                        <p className="text_justify">

                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <h5>G3D - Desobsessão</h5>
                    <Col>
                        <p className="text_justify">

                        </p>
                    </Col>
                    <Col xs={4}>
                        <Image id="imagem_arredondada" src={deso} width={350} alt="Pessoa dando passe"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}