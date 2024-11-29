import { Navbar, Nav} from "react-bootstrap";

export default function NavbarContent() {

    let Link = [
        {name: "home", link:'/'},
        {name:"Tratamentos",link:'/tratamentos'},
        {name:"Atendimentos",link:'/atendimentos'},
        {name:"Eventos",link:'/eventos'},
        {name:"Programação",link:'/programacao'},
        {name:"Palestras",link:'/palestras'},
        {name:"Biografias",link:'/biografias'},
        {name:"Fale Conosco",link:'/ale-conosco'},
        {name:"Política de Privacidade",link:'/politica-privacidade'},
    ];

    return (
        <div className="w-100">
            <Navbar>

                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        Link.map((link) => (
                            <div className="text-uppercase px-2 py-4 fw-semibold">
                                <Nav.Link href={link.link}>{link.name}</Nav.Link>
                            </div>
                        ))
                    }
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}