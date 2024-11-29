import {Col, Container, Row, Stack, Table} from "react-bootstrap";

export default function Atendimento(){
    return (
        <div id="margem_container">
            <Container>
                <h3 id="cabecalho_page">Atendimentos</h3>
                <Row>
                    <Col>
                        <h6>HORÁRIOS E DIAS DE ATENDIMENTO</h6>
                        <Stack gap={3}>
                            <div className="p-2">
                                <p className="fw-bold text-xl-center">Terças Feiras - 14:00h</p>
                                <p className="text-uppercase fw-semibold  text-xl-center">IM - cromo - g3d - Orientação</p>
                            </div>
                            <div className="p-2">
                                <p className="fw-bold text-xl-center">Quartas Feiras - 19:30h</p>
                                <p className="text-uppercase fw-semibold text-xl-center">IM - cromo - g3d - Orientação</p>
                            </div>
                            <div className="p-2">
                                <p className="fw-bold text-xl-center">Quintas Feiras - 19:30h</p>
                                <p className="text-uppercase fw-semibold text-xl-center">IM - g3d - Orientação</p>
                            </div>
                            <div className="p-2">
                                <p className="fw-bold text-xl-center">Sextas Feiras - 19:30h</p>
                                <p className="text-uppercase fw-semibold text-xl-center">IM - cromo - g3d - Orientação</p>
                            </div>
                        </Stack>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-xl-center fw-bold text-uppercase">Escola de educação mediúnica (presencial)</th>
                                <th className="text-xl-center fw-bold text-uppercase">evangelização infantojuvenil</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-center"><span className="text-uppercase">segundas feiras</span> 19:30h</td>
                            <td className="text-center"><span className="text-uppercase">quintas feiras </span> 19:30h</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
}