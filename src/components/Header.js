import Logo from "./Logo";
import NavbarContent from "./NavbarContent";
import {Col, Row} from "react-bootstrap";

export default function Header() {
    return (
        <div className="w-100 px-4 py-2 fixed-top" style={{backgroundColor: '#e5f1f9',}}>
            <Row>
                <Col>
                    <Logo />
                </Col>
                <Col>
                    <NavbarContent />
                </Col>
            </Row>
        </div>
    );
}