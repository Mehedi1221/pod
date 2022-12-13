import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../public/image/logo.png';
import style from '../../styles/homeCss/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';


function RBNavbar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        src={logo}
                        width={179}
                        height={48}
                        className={style.image}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`me-auto ${style.navitem}`}>
                        <Link href="/ProductCatalog" >Product Catalog</Link>
                        <Link href="Price">Price</Link>
                        <Link href="#link">How it Works</Link>
                        <Link href="#link">Help Desk</Link>
                        <Link href="#link">Blog</Link>
                    </Nav>

                    <Form className={`d-flex ${style.buttons}`}>
                        <Button className={style.loginBtn}>Login</Button>
                        <Button className={style.signupBtn}>Sign up</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RBNavbar;