import {Table} from "react-bootstrap";

export default function Tabela() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Data</th>
                    <th>Tema</th>
                    <th>Expositor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Quarta-Feira</td>
                    <td>01/01/2025</td>
                    <td>
                        <p>Cap05 - Bem aventurados os aflitos</p>
                        <p>Motivos de resignação</p>
                    </td>
                    <td>Cristina</td>
                </tr>
                <tr>
                    <td>Quarta-Feira</td>
                    <td>01/01/2025</td>
                    <td>
                        <p>Cap05 - Bem aventurados os aflitos</p>
                        <p>Motivos de resignação</p>
                    </td>
                    <td>Cristina</td>
                </tr>
                <tr>
                    <td>Quarta-Feira</td>
                    <td>01/01/2025</td>
                    <td>
                        <p>Cap05 - Bem aventurados os aflitos</p>
                        <p>Motivos de resignação</p>
                    </td>
                    <td>Cristina</td>
                </tr>
            </tbody>
        </Table>
    );
}