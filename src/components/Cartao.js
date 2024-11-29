import {Card} from "react-bootstrap";

export default function Cartao({img, title , text}) {
    return (
        <Card>
            <Card.Img variant="top" src={img} height={280}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}