import logo from '../img/logo.jpeg';
import Image from 'react-bootstrap/Image';

export default function Logo(){
    return (
        <a href={'/'}>
            <Image className="" src={logo} alt="Logo do Lar Espírita - O Caminho da Família Unida" roundedCircle
                                width={100} height={100}
            />
        </a>
    );
}