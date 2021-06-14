import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from '../styles/MenuStyles'

export default function Menu() {
    return (
        <Navbar variant="light">
            <Nav className="me-auto">
                <Link href="/">Strona główna</Link>
                <Link href="/">Harmonogram</Link>
            </Nav>
        </Navbar>
    );
}